const configureNativeX = require('@randall-reilly/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6000b72a0ea4830001340b71' },
  ]);

module.exports = config;
