<template>
  <form :class="blockName" @submit.prevent="handleSubmit">
    <fieldset :disabled="isLoading">
      <display-name v-model="currentDisplayName" label="Posting As" />
      <comment-body v-model="body" />
      <button
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
    </fieldset>
    <p v-if="error" class="mb-0 mt-3">
      Error: {{ error.message }}
    </p>
  </form>
</template>

<script>
import post from '@parameter1/base-cms-marko-web-identity-x/browser/utils/post';
import FormError from '@parameter1/base-cms-marko-web-identity-x/browser/errors/form';
import DisplayName from '@parameter1/base-cms-marko-web-identity-x/browser/form/fields/display-name.vue';
import CommentBody from '@parameter1/base-cms-marko-web-identity-x/browser/form/fields/comment-body.vue';

export default {
  /**
   *
   */
  components: { DisplayName, CommentBody },

  /**
   *
   */
  props: {
    stream: {
      type: Object,
      required: true,
    },

    displayName: {
      type: String,
      required: true,
    },
  },

  /**
   *
   */
  data: () => ({
    blockName: 'idx-create-comment',
    isLoading: false,
    error: null,
    body: '',
    updatedDisplayName: undefined,
  }),

  computed: {
    /**
     *
     */
    currentDisplayName: {
      get() {
        return this.updatedDisplayName || this.displayName;
      },
      set(displayName) {
        this.updatedDisplayName = displayName;
      },
    },
  },

  /**
   *
   */
  methods: {
    /**
     *
     */
    async handleSubmit() {
      this.error = null;
      this.isLoading = true;
      const { currentDisplayName, body, stream } = this;
      try {
        const res = await post('/comment', {
          displayName: currentDisplayName,
          body,
          stream,
        });
        const data = await res.json();
        if (!res.ok) throw new FormError(data.message, res.status);
        this.body = '';
        this.$emit('complete');
      } catch (e) {
        this.error = e;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
