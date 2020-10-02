<template>
  <div />
</template>

<script>
export default {
  props: {
    containerTarget: {
      type: String,
      required: true,
    },
    elementTarget: {
      type: String,
      required: true,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  created() {
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', () => {
        this.autoScroll();
      });
    } else {
      this.autoScroll();
    }
  },
  methods: {
    autoScroll() {
      const container = document.querySelector(this.containerTarget);
      const element = document.querySelector(this.elementTarget);
      if (container && element) {
        const offset = element.getBoundingClientRect().top - container.getBoundingClientRect().top;
        container.scrollTop = offset + this.offset;
      }
    },
  },
};
</script>
