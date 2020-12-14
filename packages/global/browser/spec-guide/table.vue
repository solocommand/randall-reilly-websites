<template>
  <div>
    <form class="row">
      <div class="col-12">
        <field-search
          :columns="columnList"
          :selected="selectedSearchKey"
          :disabled="isLoading"
          :phrase="searchPhrase"
          @field-change="setSelectedSearchKey"
          @phrase-change="setSearchPhrase"
        />
        <primary-operation-select
          :primaryOperations="primaryOperations"
          :selected="selectedPrimaryOperation"
          :disabled="isLoading"
          @change="setSelectedPrimaryOperation"
        />
        <field-sort
          :columns="columnList"
          :selected="selectedSortKey"
          :direction="sortDirection"
          :disabled="isLoading"
          @field-change="setSelectedSortKey"
          @direction-change="setSortDirection"
        />
      </div>
    </form>
    <div class="table-responsive">
      <table ref="table" class="table table-striped table-hover table-sm w-100 small">
        <thead class="thead-dark">
          <tr>
            <th
              v-for="col in columnList"
              :key="`${col.key}-header`"
              class="text-center align-middle"
            >
              {{ col.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="isLoading">
            <td :colspan="columnList.length">
              Loading data...
            </td>
          </tr>
          <tr v-else-if="error">
            <td :colspan="columnList.length">
              Error: {{ error.message }}
            </td>
          </tr>
          <tr v-for="(row, index) in sortedRows" v-else :key="index">
            <td
              v-for="col in columnList"
              :key="`${col.key}-row-${index}`"
              class="text-center"
            >
              <template v-if="row[col.key].htmlValue">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <span v-html="row[col.key].htmlValue" />
              </template>
              <template v-else-if="(col.type === 'number' && col.numberType === 'usCurrency')">
                {{ toUSD(row[col.key].displayValue) }}
              </template>
              <template v-else-if="col.type === 'number'">
                {{ Number(row[col.key].displayValue).toLocaleString() }}
              </template>
              <template v-else>
                {{ row[col.key].displayValue }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import { get } from 'object-path';
import escapeRegex from './utils/escape-regex';
import parseNumber from './utils/parse-number';
import PrimaryOperationSelect from './primary-operation-select.vue';
import FieldSearch from './field-search.vue';
import FieldSort from './field-sort.vue';

const { isArray } = Array;
const { keys } = Object;

export default {
  /**
   *
   */
  components: {
    PrimaryOperationSelect,
    FieldSearch,
    FieldSort,
  },

  /**
   *
   */
  props: {
    sheetSrc: {
      type: String,
      required: true,
    },
    tableRows: {
      type: Array,
      default: [],
    },
    columns: {
      type: Object,
      default: () => ({}),
    },
    initialPrimaryOperation: {
      type: String,
      default: 'All',
    },
    initialSearchKey: {
      type: String,
      default: function defaultKey() {
        return keys(this.columns)[0];
      },
    },
    driftPercent: {
      type: Number,
      default: 0.1,
      validate: v => v >= 0 && v <= 1,
    },
  },

  /**
   *
   */
  data: () => ({
    isLoading: false,
    error: null,
    activePrimaryOperation: null,
    activeSearchKey: null,
    selectedSortKey: null,
    searchPhrase: null,
    sortDirection: 1,
    rows: [],
  }),

  /**
   *
   */
  computed: {
    /**
     *
     */
    selectedPrimaryOperation() {
      const { activePrimaryOperation } = this;
      if (activePrimaryOperation) return activePrimaryOperation;
      console.log(this.initialPrimaryOperation);
      return this.initialPrimaryOperation;
    },

    /**
     *
     */
    selectedSearchKey() {
      const { activeSearchKey } = this;
      if (activeSearchKey) return activeSearchKey;
      return this.initialSearchKey;
    },

    /**
     *
     */
    columnList() {
      const { columns } = this;
      const colKeys = keys(columns);
      return colKeys.map((key) => {
        const col = columns[key];
        return { ...col, key, label: col.label || key };
      });
    },

    /**
     *
     */
    filteredRows() {
      this.isLoading = true;
      const {rows, searchPhrase, selectedSearchKey, selectedPrimaryOperation } = this;
      let filteredRows = rows;
      if (selectedPrimaryOperation !== 'All') filteredRows = this.filterByPrimaryOperation(filteredRows, selectedPrimaryOperation);
      if (!searchPhrase) {
        this.isLoading = false;
        return filteredRows;
      }
      const column = this.getColumn(selectedSearchKey);
      if (column.type === 'number') {
        filteredRows = this.filterByNumber({ rows: filteredRows, key: selectedSearchKey, phrase: searchPhrase });
        this.isLoading = false;
        return filteredRows;
      }

      filteredRows = this.filterByRegex({ rows: filteredRows, key: selectedSearchKey, phrase: searchPhrase });
      this.isLoading = false;
      return filteredRows;
    },

    /**
     *
     */
    sortedRows() {
      const { selectedSortKey, sortDirection, filteredRows } = this;
      if (!selectedSortKey) return filteredRows;
      const column = this.getColumn(selectedSortKey);
      if (column.type === 'number') {
        return filteredRows.sort((rowA, rowB) => {
          if (sortDirection === 1) {
            const { min: a } = get(rowA, selectedSortKey);
            const { min: b } = get(rowB, selectedSortKey);
            return this.sortValues(a, b, sortDirection);
          }
          const { max: a } = get(rowA, selectedSortKey);
          const { max: b } = get(rowB, selectedSortKey);
          return this.sortValues(a, b, sortDirection);
        });
      }
      return filteredRows.sort((rowA, rowB) => {
        const { displayValue: a } = get(rowA, selectedSortKey);
        const { displayValue: b } = get(rowB, selectedSortKey);
        return this.sortValues(a, b, sortDirection);
      });
    },
  },

  /**
   *
   */
  created() {
    this.loadData();
  },

  /**
   *
   */
  methods: {
    /**
     *
     */
    toUSD (num) {
      return `$${num.toLocaleString()}`
    },

    /**
     *
     */
    setSelectedPrimaryOperation(primaryOperation) {
      console.log(primaryOperation);
      this.activePrimaryOperation = primaryOperation;
      const { selectedSearchKey } = this;
      if (selectedSearchKey) {
        const col = this.getColumn(selectedSearchKey);
        if (col && col.measure) {
          this.searchPhrase = null;
          this.selectedSortKey = null;
        }
      }
    },

    /**
     *
     */
    setSelectedSearchKey(key) {
      this.activeSearchKey = key;
      this.searchPhrase = null;
    },

    /**
     *
     */
    setSearchPhrase(phrase) {
      this.searchPhrase = phrase;
    },

    /**
     *
     */
    setSelectedSortKey(key) {
      this.selectedSortKey = key;
    },

    /**
     *
     */
    setSortDirection(direction) {
      this.sortDirection = direction;
    },

    sortValues(a, b, direction) {
      if (a > b) return 1 * direction;
      if (a < b) return -1 * direction;
      return 0;
    },

    /**
     *
     */
    getColumn(key) {
      return this.columns[key];
    },

    /**
     *
     */
    getDisplayValue(col, row) {
      const { key } = col;
      const value = get(row, key);
      if (!value) return '';
      if (value.invalidNumber) return value.raw || '';
      if (value.hasRange) return `${value.min} - ${value.max}`;
      if (value.min != null) return value.min;
      return value.raw;
    },

    /**
     *
     */
    filterByPrimaryOperation(rows, selectedPrimaryOperation) {
      if (!selectedPrimaryOperation) return rows;
      return this.rows.filter((row) => {
        return row.primaryOperation.raw === selectedPrimaryOperation;
      });
    },

    /**
     *
     */
    filterByRegex({ rows, key, phrase }) {
      if (!phrase) return rows;
      const tokens = escapeRegex(phrase).replace(/\s\s+/, ' ').split(' ');
      const pattern = new RegExp(`${tokens.join('|')}`, 'i');
      return rows.filter((row) => {
        const { displayValue } = get(row, key);
        return pattern.test(displayValue);
      });
    },

    /**
     *
     */
    filterByNumber({ rows, key, phrase }) {
      const tuple = parseNumber({ value: phrase });
      if (tuple == null) return [];
      const [n] = tuple;

      const exponent = `${parseInt(Math.abs(n), 10)}`.length - 1;
      const drift = (10 ** exponent) * this.driftPercent;
      const min = n - drift;
      const max = n + drift;

      return rows.filter((row) => {
        const val = get(row, key);
        if (!val) return false;
        if (val.hasRange) {
          return (min >= val.min && min <= val.max) || (max >= val.min && max <= val.max);
        }
        return val.min >= min && val.min <= max;
      });
    },

    /**
     *
     */
    async loadData() {
      this.isLoading = true;

      let rows = this.tableRows;
      const primaryOperations = ['All'];

      // Format/simplify the raw data.
      this.rows = isArray(rows) ? rows.map((row) => {
        const newRow = this.columnList.reduce((o, col) => {
          const { key } = col;

          const raw = row[key];
          if (key === 'primaryOperation') primaryOperations.push(raw);
          const values = { raw };
          if (isArray(col.range) && col.range.length === 2) {
            // dependends on other spreadsheet fields for low/high values.
            const [lowKey, highKey] = col.range;
            const lowRaw = row[lowKey];
            const highRaw = row[highKey];

            const lowRange = parseNumber({ value: lowRaw });
            const highRange = parseNumber({ value: highRaw });

            if (lowRange && highRange) {
              // both ranges were parsed successfully.
              // use the min of the lowest, and the max of the highest.
              const [lowMin] = lowRange;
              const [, highMax] = highRange;
              values.min = lowMin;
              values.max = highMax;
              values.hasRange = values.min !== values.max;
            } else if (lowRange) {
              // only a low range was parsed. use min/max of it.
              const [min, max] = lowRange;
              values.min = min;
              values.max = max;
              values.hasRange = min !== max;
            } else if (highRange) {
              // only a high range was parsed. use min/max of it.
              const [min, max] = highRange;
              values.min = min;
              values.max = max;
              values.hasRange = min !== max;
            } else {
              values.raw = lowRaw || highRaw;
              values.min = 0;
              values.max = 0;
              values.hasRange = false;
              values.invalidNumber = true;
            }
          } else if (col.type === 'number') {
            // single number.
            const range = parseNumber({ value: raw });
            if (range) {
              const [min, max] = range;
              values.min = min;
              values.max = max;
              values.hasRange = min !== max;
            } else {
              values.min = 0;
              values.max = 0;
              values.hasRange = false;
              values.invalidNumber = true;
            }
          }
          return { ...o, [key]: values };
        }, {});

        // calculate display value off of formatted row.
        this.columnList.forEach((col) => {
          const displayValue = this.getDisplayValue(col, newRow);
          newRow[col.key].displayValue = displayValue;
        });
        return newRow;
      }) : [];
      // clear the rows after mapping to allow for gc.
      rows = [];
      this.primaryOperations = [...new Set(primaryOperations)];
      this.isLoading = false;
    },
  },
};
</script>
