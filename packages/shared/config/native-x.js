const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

module.exports = ({
  uri = 'https://randall-reilly.native-x.parameter1.com',
  enabled = false,
} = {}) => new NativeXConfiguration(uri, { enabled });
