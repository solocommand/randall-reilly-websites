const IdentityXConfiguration = require('@parameter1/base-cms-marko-web-identity-x/config');

module.exports = ({
  appId,
  requiredServerFields,
} = {}) => new IdentityXConfiguration({ appId, requiredServerFields });
