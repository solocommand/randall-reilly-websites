const createClient = require('./create-client');

module.exports = ({
  uri,
  config,
  linkConfig,
  prop = '$equipmentExperts',
} = {}) => (req, res, next) => {
  const client = createClient({ uri, config, linkConfig });
  req[prop] = client;
  res.locals[prop] = client;
  next();
};
