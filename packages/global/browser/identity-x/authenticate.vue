<template>
  <div v-if="isRedirecting">
    <p>You've successfully logged in. Redirecting you...</p>
  </div>
  <div v-else-if="isLoading">
    <p>Logging in...</p>
  </div>
  <div v-else-if="error" class="alert alert-danger" role="alert">
    <h5 class="alert-heading">
      Unable to Login
    </h5>
    <p>{{ error.message }}</p>
    <hr>
    <p class="mb-0">
      Please try <a :href="endpoints.login" class="alert-link">logging in</a> again.
    </p>
  </div>
</template>

<script>
import redirect from '@parameter1/base-cms-marko-web-identity-x/browser/utils/redirect';
import cookiesEnabled from '@parameter1/base-cms-marko-web-identity-x/browser/utils/cookies-enabled';
import post from '@parameter1/base-cms-marko-web-identity-x/browser/utils/post';
import AuthenticationError from '@parameter1/base-cms-marko-web-identity-x/browser/errors/authentication';
import FeatureError from '@parameter1/base-cms-marko-web-identity-x/browser/errors/feature';

export default {
  /**
   *
   */
  props: {
    token: {
      type: String,
      required: true,
    },
    endpoints: {
      type: Object,
      required: true,
    },
    redirectTo: {
      type: String,
      default: '/',
    },
  },

  /**
   *
   */
  data: () => ({
    error: null,
    isLoading: false,
    isRedirecting: false,
  }),

  /**
   *
   */
  computed: {
    isUserRedirect() {
      const { redirectTo } = this;
      const { login, register } = this.endpoints;
      if (redirectTo.indexOf(login) === 0) return true;
      if (redirectTo.indexOf(register) === 0) return true;
      return false;
    },
  },

  /**
   *
   */
  mounted() {
    if (cookiesEnabled()) {
      this.authenticate();
    } else {
      this.error = new FeatureError('Your browser does not support cookies. Please enable cookies to use this feature.');
    }
  },

  /**
   *
   */
  methods: {
    /**
     *
     */
    async authenticate() {
      try {
        this.error = null;
        this.isLoading = true;

        const { token } = this;
        if (!token) throw new Error('No login token was provided.');

        const res = await post('/authenticate', { token });
        const data = await res.json();

        if (!res.ok) throw new AuthenticationError(data.message, res.status);
        this.$emit('authenticate');
        this.redirect();
      } catch (e) {
        if (/no token was found/i.test(e.message)) {
          e.message = 'This login link has either expired or was already used.';
        }
        this.error = e;
      } finally {
        this.isLoading = false;
      }
    },

    /**
     *
     */
    redirect() {
      this.isRedirecting = true;
      const redirectTo = this.isUserRedirect ? '/' : this.redirectTo;
      redirect(redirectTo);
    },
  },
};
</script>
