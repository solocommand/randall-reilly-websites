const template = require('@randall-reilly/package-shared/templates/search');

module.exports = (app) => {
  app.get('/search', (_, res) => { res.marko(template); });
};
