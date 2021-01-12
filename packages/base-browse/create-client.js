const fetch = require('node-fetch');
const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { createHttpLink } = require('apollo-link-http');
const { getAsObject } = require('@parameter1/base-cms-object-path');

const rootConfig = {
  connectToDevTools: false,
  ssrMode: true,
};

module.exports = ({
  uri,
  tenantKey,
  config,
  linkConfig,
} = {}) => {
  if (!uri) throw new Error('The Base Browse GraphQL API URI must be provided.');
  if (!tenantKey) throw new Error('The Base Browse tenant key must be provided.');

  return new ApolloClient({
    ...config,
    ...rootConfig,
    link: createHttpLink({
      fetch,
      ...linkConfig,
      uri,
      headers: {
        ...getAsObject(linkConfig, 'headers'),
        'x-tenant-key': tenantKey,
      },
    }),
    cache: new InMemoryCache(),
  });
};
