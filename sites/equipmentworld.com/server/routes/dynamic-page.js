const { withDynamicPage } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@randall-reilly/package-global/graphql/fragments/dynamic-page');
const page = require('@randall-reilly/package-global/templates/dynamic-page');

module.exports = (app) => {
  app.get('/page/:alias(*)', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
