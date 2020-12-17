<template>
  <div v-if="measures.length" class="form-group">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          Unit of Measure:
        </span>
      </div>
      <select
        v-if="measures.length"
        class="custom-select"
        :disabled="disabled"
        @change="emitChange"
      >
        <option
          v-for="measure in measures"
          :key="measure.key"
          :value="measure.key"
          :selected="measure.key === selected"
        >
          {{ measure.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: String,
      default: null,
    },
    measures: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    emitChange(event) {
      this.$emit('change', event.target.value);
    },
  },
};
</script>
