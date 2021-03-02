const { asyncRoute } = require('@parameter1/base-cms-utils');
module.exports = (app) => {
  app.get('/feed', asyncRoute(async (req, res) => {
    const parts = [
    ];
    res.set('Content-Type', 'application/rss+xml');
    res.send(parts.join('\n'));
  }));
};
