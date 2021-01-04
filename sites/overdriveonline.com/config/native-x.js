const configureNativeX = require('@randall-reilly/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5ff3320140cc3e000117533e' },
  ]);

module.exports = config;
