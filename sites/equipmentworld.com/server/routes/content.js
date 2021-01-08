const withContent = require('@randall-reilly/package-global/middleware/with-content');
const queryFragment = require('@randall-reilly/package-global/graphql/fragments/content-page');
const contact = require('@randall-reilly/package-global/templates/content/contact');
const deathByTrench = require('../templates/content/death-by-trench');
const product = require('../templates/content/product');
const whitepaper = require('../templates/content/whitepaper');
const content = require('../templates/content');

module.exports = (app) => {
  app.get('/death-by-trench/*?:id(\\d{8})*', withContent({
    template: deathByTrench,
    queryFragment,
  }));

  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: contact,
    queryFragment,
  }));

  app.get('/*?product/:id(\\d{8})*', withContent({
    template: product,
    queryFragment,
  }));

  app.get('/*?whitepaper/:id(\\d{8})*', withContent({
    template: whitepaper,
    queryFragment,
  }));

  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
