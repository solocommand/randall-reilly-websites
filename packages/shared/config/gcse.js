const GCSEConfiguration = require('@base-cms/marko-web-gcse/config');

module.exports = ({ apiKey } = {}) => new GCSEConfiguration(apiKey);
