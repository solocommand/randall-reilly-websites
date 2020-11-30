const { withContent } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@randall-reilly/package-global/graphql/fragments/content-page');
const content = require('@randall-reilly/package-global/templates/content');
const product = require('@randall-reilly/package-global/templates/content/product');

module.exports = (app) => {
  app.get('/*?product/:id(\\d{8})*', withContent({
    template: product,
    queryFragment,
  }));

  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
