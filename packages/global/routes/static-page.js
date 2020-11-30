const oneTrustTemplate = require('../templates/static/one-trust');

module.exports = (app) => {
  const oneTrust = app.locals.site.getAsArray('oneTrust');

  oneTrust.forEach((item) => {
    if (item.href && item.id) {
      app.get(item.href, (_, res) => { res.marko(oneTrustTemplate, { oneTrustId: item.id }); });
    }
  });
};
