const configureNativeX = require('@randall-reilly/package-global/config/native-x');

const config = configureNativeX();

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6000b672140b3d0001040608' },
  ]);

module.exports = config;
