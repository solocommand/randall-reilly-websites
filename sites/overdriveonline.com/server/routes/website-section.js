const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@randall-reilly/package-global/graphql/fragments/website-section-page');
const partnersInBusiness = require('../templates/website-section/partners-in-business');
const products = require('../templates/website-section/products');
const rrSubmission = require('../templates/new-reader-reg-submission');
const section = require('../templates/website-section');

module.exports = (app) => {
  app.get('/new-reader-reg-submission', (_, res) => { res.marko(rrSubmission); });
  app.get('/:alias(gear)', withWebsiteSection({
    template: products,
    queryFragment,
  }));
  app.get('/:alias(partners-in-business)', withWebsiteSection({
    template: partnersInBusiness,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
