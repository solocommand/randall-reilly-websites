const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@randall-reilly/package-global/graphql/fragments/website-section-page');
const section = require('@randall-reilly/package-global/templates/website-section');
const productList = require('@randall-reilly/package-global/templates/website-section/product-list');

module.exports = (app) => {
  app.get('/:alias(gear)', withWebsiteSection({
    template: productList,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
