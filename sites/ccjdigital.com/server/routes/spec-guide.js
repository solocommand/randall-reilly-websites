const index = require('@randall-reilly/package-global/templates/spec-guide');
const guide = require('@randall-reilly/package-global/templates/spec-guide/guide');

const { keys } = Object;

module.exports = (app) => {
  const { specGuides } = app.locals;
  if (specGuides) {
    const { rootPath = '/specguide' } = specGuides;
    app.get(rootPath, (req, res) => {
      res.marko(index);
    });

    keys(specGuides.guides).forEach((alias) => {
      app.get(`${rootPath}/${alias}`, (req, res) => {
        res.marko(guide, {
          alias,
        });
      });
    });
  }
};
