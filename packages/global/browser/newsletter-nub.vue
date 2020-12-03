<template>
  <button
    :class="className"
    type="button"
    :aria-label="buttonLabel"
    @click="toggle"
  >
    <icon-chevron-up :modifiers="iconModifiers" />
  </button>
</template>

<script>
import IconChevronUp from '@base-cms/marko-web-icons/browser/chevron-up.vue';

export default {
  components: {
    IconChevronUp,
  },
  props: {
    className: {
      type: String,
      default: null,
    },
    targetButton: {
      type: String,
      required: true,
    },
    iconModifiers: {
      type: Array,
      default: () => [],
    },
    buttonLabel: {
      type: String,
      default: 'Toggle Newsletter Menu',
    },
  },
  methods: {
    toggle() {
      const element = document.querySelector(this.targetButton);
      if (element) element.click();
    },
  },
};
</script>
