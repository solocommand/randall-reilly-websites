const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const routes = require('./server/routes');

module.exports = startServer({
  rootDir: __dirname,
  routes,
  onStart: app => app.set('trust proxy', 'loopback, linklocal, uniquelocal'),
  onAsyncBlockError: e => newrelic.noticeError(e),
});
