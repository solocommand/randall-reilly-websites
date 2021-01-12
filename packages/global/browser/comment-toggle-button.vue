<template>
  <button
    :class="classes"
    type="button"
    @click="toggle"
  >
    <span>{{ label }} Comments ({{ totalCount }})</span>
    <component :is="arrow" class="comment-toggle-arrow" />
  </button>
</template>

<script>
import EventBus from '@parameter1/base-cms-marko-web/browser/event-bus';
import get from '@parameter1/base-cms-marko-web-identity-x/browser/utils/get';
import ArrowUp from '@parameter1/base-cms-marko-web-icons/browser/triangle-up.vue';
import ArrowDown from '@parameter1/base-cms-marko-web-icons/browser/triangle-down.vue';

export default {
  components: { ArrowUp, ArrowDown },

  props: {
    identifier: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      default: null,
    },
    targets: {
      type: Array,
      default: () => [],
    },
    toggleClass: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    error: null,
    expanded: false,
    isLoading: false,
    totalCount: 0,
  }),

  computed: {
    label() {
      if (this.expanded) return 'Hide';
      return 'Show';
    },
    arrow() {
      if (this.expanded) return ArrowUp;
      return ArrowDown;
    },
  },

  created() {
    this.loadCount();
  },

  methods: {
    /**
     *
     */
    async loadCount() {
      try {
        this.error = null;
        this.isLoading = true;
        const res = await get(`/comment-count/${this.identifier}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        this.totalCount = data.totalCount;
      } catch (e) {
        this.error = e;
      } finally {
        this.isLoading = false;
      }
    },

    toggle() {
      this.expanded = !this.expanded;
      EventBus.$emit('comments-expanded', this.expanded);
      const elements = document.querySelectorAll(this.targets.join(','));
      Array.prototype.forEach.call(elements, el => el.classList.toggle(this.toggleClass));
    },
  },
};
</script>
