const GAMConfiguration = require('@base-cms/marko-web-gam/config');

module.exports = ({
  accountId = '76221239',
  basePath,
} = {}) => {
  const config = new GAMConfiguration(accountId, { basePath });

  config
    .setTemplate('LB1', {
      size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
        { viewport: [750, 0], size: [728, 90] },
        { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
      ],
    })
    .setTemplate('LB2', {
      size: [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
        { viewport: [750, 0], size: [728, 90] },
        { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
      ],
    })
    .setTemplate('MS', { size: [300, 50] })
    .setTemplate('RAIL1', { size: [300, 250] })
    .setTemplate('RAIL2', { size: [300, 600] })
    .setTemplate('LM', { size: [[300, 250], [300, 600]] });

  // Set company page takeover ads to all sites.
  config.setAdUnit({
    alias: 'default',
    name: 'company-takeover-lb1',
    templateName: 'LB1',
    path: 'default/company-takeover',
  }).setAdUnit({
    alias: 'default',
    name: 'company-takeover-rail1',
    templateName: 'RAIL1',
    path: 'default/company-takeover',
  }).setAdUnit({
    alias: 'default',
    name: 'company-takeover-reskin',
    path: 'default/company-takeover',
  });

  return config;
};
