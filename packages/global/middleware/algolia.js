const algoliasearch = require('algoliasearch');

module.exports = ({
  appId,
  apiKey,
  defaultIndex,
  prop = '$algolia',
} = {}) => (req, res, next) => {
  if (!appId || !apiKey || !defaultIndex) throw new Error('The Algolia `appId`, `apiKey`, and `defaultIndex` are required.');

  const client = algoliasearch(appId, apiKey);
  const algolia = { client, defaultIndex: client.initIndex(defaultIndex) };
  req[prop] = algolia;
  res.locals[prop] = algolia;
  next();
};
