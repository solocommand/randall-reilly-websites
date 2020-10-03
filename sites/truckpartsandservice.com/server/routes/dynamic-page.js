const { withDynamicPage } = require('@base-cms/marko-web/middleware');
const page = require('@randall-reilly/package-shared/templates/dynamic-page');
const queryFragment = require('@randall-reilly/package-shared/graphql/fragments/dynamic-page');

module.exports = (app) => {
  app.get('/page/:alias(*)', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
