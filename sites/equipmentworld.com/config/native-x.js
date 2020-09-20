const configureNativeX = require('@randall-reilly/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: 'NOT-SET' },
  ])

module.exports = config;
