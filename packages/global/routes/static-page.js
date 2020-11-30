const oneTrustTemplate = require('../templates/static/one-trust');

module.exports = (app) => {
  const oneTrust = app.locals.site.getAsArray('oneTrust');

  oneTrust.forEach((item) => {
    if (item.path && item.id) {
      app.get(item.path, (_, res) => { res.marko(oneTrustTemplate, { oneTrustId: item.id }); });
    }
  });
};
