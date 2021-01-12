const gql = require('graphql-tag');
const IdentityX = require('@parameter1/base-cms-marko-web-identity-x');
const { getAsObject } = require('@parameter1/base-cms-object-path');
const { asyncRoute } = require('@parameter1/base-cms-utils');
const authenticate = require('../templates/user/authenticate');
const login = require('../templates/user/login');
const logout = require('../templates/user/logout');
const register = require('../templates/user/register');
const profile = require('../templates/user/profile');

const countQuery = gql`
  query CountComments($identifier: String!) {
    commentsForStream(input: { identifier: $identifier }) {
      totalCount
    }
  }
`;

module.exports = (app) => {
  const config = getAsObject(app, 'locals.identityX');
  IdentityX(app, config);

  app.get(config.getEndpointFor('authenticate'), (_, res) => {
    res.marko(authenticate);
  });

  app.get(config.getEndpointFor('login'), (_, res) => {
    res.marko(login);
  });

  app.get(config.getEndpointFor('logout'), (_, res) => {
    res.marko(logout);
  });

  app.get(config.getEndpointFor('register'), (_, res) => {
    res.marko(register);
  });

  app.get(config.getEndpointFor('profile'), (_, res) => {
    res.marko(profile);
  });

  app.get('/__idx/comment-count/:identifier', asyncRoute(async (req, res) => {
    const { identityX } = req;
    const { identifier } = req.params;
    const variables = { identifier };
    const { data } = await identityX.client.query({ query: countQuery, variables });
    res.json(data.commentsForStream);
  }));
};
