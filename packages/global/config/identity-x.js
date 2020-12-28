const IdentityXConfiguration = require('@base-cms/marko-web-identity-x/config');

module.exports = ({
  appId,
} = {}) => new IdentityXConfiguration({ appId });
