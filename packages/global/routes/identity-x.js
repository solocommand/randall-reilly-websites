const IdentityX = require('@base-cms/marko-web-identity-x');
const { getAsObject } = require('@base-cms/object-path');
const authenticate = require('../templates/user/authenticate');
const login = require('../templates/user/login');
const logout = require('../templates/user/logout');
const register = require('../templates/user/register');
const profile = require('../templates/user/profile');

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
};
