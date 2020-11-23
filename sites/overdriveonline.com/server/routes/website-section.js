const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@randall-reilly/package-global/graphql/fragments/website-section-page');
const section = require('@randall-reilly/package-global/templates/website-section');
const gear = require('@randall-reilly/package-global/templates/website-section/gear');

module.exports = (app) => {
  app.get('/:alias(gear)', withWebsiteSection({
    template: gear,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
