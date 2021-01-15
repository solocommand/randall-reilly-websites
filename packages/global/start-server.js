const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const { set, get } = require('@parameter1/base-cms-object-path');
const cleanResponse = require('@parameter1/base-cms-marko-core/middleware/clean-marko-response');
const baseBrowse = require('@randall-reilly/base-browse/middleware');

const pkg = require('./package.json');
const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');
const sharedRoutes = require('./routes');
const paginated = require('./middleware/paginated');
const newsletterState = require('./middleware/newsletter-state');
const algolia = require('./middleware/algolia');

const { env } = process;

const routes = siteRoutes => (app) => {
  // Shared/global routes (all sites)
  sharedRoutes(app);
  // Load site routes
  siteRoutes(app);
};

module.exports = (options = {}) => {
  const { onStart } = options;
  return startServer({
    ...options,
    routes: routes(options.routes),
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');

      // Use Algolia client/index middleware
      // Will be available on `req.$algolia` and `res.locals.$algolia`
      app.use(algolia({
        appId: env.ALGOLIA_APP_ID,
        apiKey: env.ALGOLIA_API_KEY,
        defaultIndex: env.ALGOLIA_DEFAULT_INDEX,
      }));

      // Use "Base Browse" GraphQL middleware
      // Will be available on `req.$baseBrowse` and `res.locals.$baseBrowse`
      app.use(baseBrowse({
        uri: env.BASE_BROWSE_GRAPHQL_URI,
        tenantKey: env.TENANT_KEY,
        config: { name: pkg.name, version: pkg.version },
      }));

      // Use paginated middleware
      app.use(paginated());

      // Use newsletterState middleware
      app.use(newsletterState());

      // Setup GAM.
      const gamConfig = get(options, 'siteConfig.gam');
      set(app.locals, 'GAM', gamConfig);

      // Setup NativeX.
      const nativeXConfig = get(options, 'siteConfig.nativeX');
      set(app.locals, 'nativeX', nativeXConfig);

      // Setup IdentityX.
      const identityXConfig = get(options, 'siteConfig.identityX');
      set(app.locals, 'identityX', identityXConfig);

      // Clean all response bodies.
      app.use(cleanResponse());
    },
    onAsyncBlockError: e => newrelic.noticeError(e),

    redirectHandler: ({ from }) => {
      // redirect sized images to their sized, master versions in imgix
      const matches = /^\/wp-content\/uploads\/.+(-([0-9]+)x([0-9]+))\.[a-z]+$/i.exec(from);
      if (matches && matches[1]) {
        const w = matches[2];
        const h = matches[3];
        const to = `${from.replace(matches[1], '')}?w=${w}&h=${h}&fit=crop&auto=format`;
        return { to };
      }
      return null;
    },
  });
};
