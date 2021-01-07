const createClient = require('./create-client');

module.exports = ({
  uri,
  tenantKey,
  config,
  linkConfig,
  prop = '$baseBrowse',
} = {}) => (req, res, next) => {
  const client = createClient({
    uri,
    tenantKey,
    config,
    linkConfig,
  });
  req[prop] = client;
  res.locals[prop] = client;
  next();
};
