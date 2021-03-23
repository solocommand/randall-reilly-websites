const startServer = require('@randall-reilly/package-global/start-server');
const equipmentExperts = require('@randall-reilly/equipment-experts/middleware');

const { name, version } = require('./package.json');
const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes,
  onStart: (app) => {
    // Use "Equipment Experts" GraphQL middleware
    const { EQUIPMENT_EXPERTS_GRAPHQL_URI: uri } = process.env;
    app.use(equipmentExperts({ uri, config: { name, version } }));
  },
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
