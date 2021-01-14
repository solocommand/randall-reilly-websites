const configureNativeX = require('@randall-reilly/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6000b7460ea4830001340b96' },
  ]);

module.exports = config;
