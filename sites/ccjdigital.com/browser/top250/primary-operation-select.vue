<template>
  <div v-if="primaryOperations.length" class="form-group">
    <div class="input-group">
      <select
        v-if="primaryOperations.length"
        class="custom-select btn"
        :class="(!selected || selected === 'all') ? 'btn-secondary' : 'btn-primary'"
        :disabled="disabled"
        @change="emitChange"
      >
        <option
          v-for="primaryOperation in primaryOperations"
          :key="primaryOperation"
          :value="primaryOperation"
          :selected="primaryOperation === selected"
        >
          <span v-if="primaryOperation !== 'all'">{{ primaryOperation }}</span>
          <span v-else>Primary Operation</span>
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
    primaryOperations: {
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
