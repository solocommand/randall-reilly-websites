<template>
  <div v-if="columns.length" class="form-group">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          Sort By:
        </span>
      </div>
      <select class="custom-select" :disabled="disabled" @change="emitFieldChange">
        <option value="" :selected="!selectedKey">
          Select column...
        </option>
        <option
          v-for="col in columns"
          :key="col.key"
          :value="col.key"
          :selected="col.key === selectedKey"
        >
          {{ col.label }}
        </option>
      </select>
      <div class="input-group-append">
        <span class="input-group-text">
          {{ directionLabel }}
        </span>
        <button
          type="button"
          class="btn btn-outline-secondary"
          :disabled="disabled"
          @click="emitDirectionChange"
        >
          Change Direction
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: Number,
      default: 1,
      validate: v => [1, -1].includes(v),
    },
    selectedKey: {
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
    directionLabel() {
      if (this.direction === 1) return 'Low to High';
      return 'High to Low';
    },
  },

  methods: {
    emitFieldChange(event) {
      this.$emit('field-change', event.target.value || null);
    },

    emitDirectionChange() {
      this.$emit('direction-change', this.direction * -1);
    },
  },
};
</script>
