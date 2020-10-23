const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@randall-reilly/package-shared/graphql/fragments/website-section-page');
const postIdHandler = require('@randall-reilly/package-shared/middleware/post-id-handler');
const home = require('../templates/index');

module.exports = (app) => {
  app.get('/', postIdHandler(), withWebsiteSection({
    aliasResolver: () => 'home',
    template: home,
    queryFragment,
  }));
};
