const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const { get } = require('@base-cms/object-path');
const queryFragment = require('@randall-reilly/package-global/graphql/fragments/website-section-page');
const index = require('../templates/website-section/top250');
const guide = require('../templates/website-section/top250/guide');

const { keys } = Object;

module.exports = (app) => {
  const top250 = get(app, 'locals.site.config.top250');
  if (top250) {
    const { rootAlias = 'ccj-top-250' } = top250;
    app.get(`/:alias(${rootAlias})`, withWebsiteSection({
      template: index,
      queryFragment,
    }));
    if (Object.keys(top250.guides).length) {
      keys(top250.guides).forEach((alias) => {
        app.get(`/${rootAlias}/${alias}`, (req, res) => {
          res.marko(guide, {
            alias,
          });
        });
      });
    }
  }
};
