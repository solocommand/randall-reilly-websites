<template>
  <div v-if="columns.length" class="form-group">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          Filter By:
        </span>
      </div>
      <select class="custom-select" :disabled="disabled" @change="emitFieldChange">
        <option
          v-for="col in columns"
          :key="col.key"
          :value="col.key"
          :selected="col.key === selected"
        >
          {{ col.label }}
        </option>
      </select>
      <input
        class="form-control"
        :value="phrase"
        :disabled="disabled"
        :type="type"
        placeholder="Enter search value..."
        @input="emitPhraseChange(...arguments)"
      >
      <div class="input-group-append">
        <button
          type="button"
          class="btn btn-outline-secondary"
          :disabled="!phrase"
          @click="clearSearchPhrase"
        >
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'debounce';

export default {
  props: {
    phrase: {
      type: String,
      default: null,
    },
    selected: {
      type: String,
      default: null,
    },
    columns: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    selectedColumn() {
      return this.columns.find(col => col.key === this.selected);
    },

    type() {
      const { selectedColumn } = this;
      if (!selectedColumn || selectedColumn.type !== 'number') return 'text';
      return 'number';
    },
  },

  methods: {
    emitFieldChange(event) {
      this.$emit('field-change', event.target.value);
    },
    emitPhraseChange: debounce(function emit(event) {
      this.$emit('phrase-change', event.target.value);
    }, 250),
    clearSearchPhrase() {
      this.$emit('phrase-change', null);
    },
  },
};
</script>
