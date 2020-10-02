const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

module.exports = ({
  uri = 'https://ebm.native-x.io',
  enabled = true,
} = {}) => new NativeXConfiguration(uri, { enabled });
