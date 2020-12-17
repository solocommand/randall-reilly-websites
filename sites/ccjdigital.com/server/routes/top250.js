const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@randall-reilly/package-global/graphql/fragments/website-section-page');
const index = require('../templates/website-section/top250');
const guide = require('../templates/website-section/top250/guide');

const { keys } = Object;

module.exports = (app) => {
  const { specGuides } = app.locals;
  if (specGuides) {
    const { rootAlias = 'ccj-top-250' } = specGuides;
    app.get(`/:alias(${rootAlias})`, withWebsiteSection({
      template: index,
      queryFragment,
    }));

    keys(specGuides.guides).forEach((alias) => {
      app.get(`/${rootAlias}/${alias}`, (req, res) => {
        res.marko(guide, {
          alias,
        });
      });
    });
  }
};
