const { withContent } = require('@base-cms/marko-web/middleware');
const queryFragment = require('../graphql/fragments/content-page');
const printTemplate = require('../templates/content/print');

module.exports = (app) => {
  app.get('/print/content/:id(\\d{8})', withContent({
    template: printTemplate,
    queryFragment,
    redirectOnPathMismatch: false,
  }));
};
