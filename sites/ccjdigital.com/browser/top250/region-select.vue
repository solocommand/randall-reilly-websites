<template>
  <div v-if="regions.length" class="form-group">
    <div class="input-group">
      <select
        v-if="regions.length"
        class="custom-select btn"
        :class="(selected !== 'Regions') ? 'btn-primary' : 'btn-secondary'"
        :disabled="disabled"
        @change="emitChange"
      >
        <option
          v-for="region in regions"
          :key="region"
          :value="region"
        >
          {{ region }}
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
    regions: {
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
