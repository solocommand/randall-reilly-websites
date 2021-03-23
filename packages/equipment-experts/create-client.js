const fetch = require('node-fetch');
const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { createHttpLink } = require('apollo-link-http');

module.exports = ({ uri, config, linkConfig } = {}) => {
  if (!uri) throw new Error('The Equipment Experts GraphQL API URI must be provided.');

  return new ApolloClient({
    ...config,
    connectToDevTools: false,
    ssrMode: true,
    link: createHttpLink({
      fetch,
      ...linkConfig,
      uri,
    }),
    cache: new InMemoryCache(),
  });
};
