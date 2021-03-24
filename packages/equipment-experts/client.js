const fetch = require('node-fetch');
const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { createHttpLink } = require('apollo-link-http');
const { name, version } = require('./package.json');

const { EQUIPMENT_EXPERTS_GRAPHQL_URI: uri } = process.env;
if (!uri) throw new Error('The Equipment Experts GraphQL API URI must be provided.');

module.exports = new ApolloClient({
  name,
  version,
  connectToDevTools: false,
  ssrMode: true,
  link: createHttpLink({ fetch, uri }),
  cache: new InMemoryCache(),
});
