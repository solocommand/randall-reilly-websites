const path = require('path');

module.exports = (app) => {
  app.get('/robots.txt', (_, res, next) => res.sendFile('robots.txt', {
    root: path.resolve(__dirname, '../public'),
    dotfiles: 'deny',
  }, (err) => { if (err) next(err); }));

  app.use('*', (_, res) => res.redirect(302, 'https://equipmentexperts.com'));
};
