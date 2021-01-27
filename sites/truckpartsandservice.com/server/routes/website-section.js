const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@randall-reilly/package-global/graphql/fragments/website-section-page');
const products = require('../templates/website-section/products');
const section = require('../templates/website-section');

const directoryIndex = require('../templates/website-section/directory');
const directorySection = require('../templates/website-section/directory/_alias');

const directoryAlias = 'aftermarket-truck-parts-suppliers';

module.exports = (app) => {
  app.get(`/:alias(${directoryAlias})`, withWebsiteSection({
    template: directoryIndex,
    queryFragment,
  }));
  app.get(`/:alias(${directoryAlias}/[a-z0-9-/]+)`, withWebsiteSection({
    template: directorySection,
    queryFragment,
  }));

  app.get('/:alias(products)', withWebsiteSection({
    template: products,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
