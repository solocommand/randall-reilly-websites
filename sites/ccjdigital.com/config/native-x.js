const configureNativeX = require('@randall-reilly/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6000b6bd0ea4830001340a86' },
  ]);

module.exports = config;
