const GAMConfiguration = require('@base-cms/marko-web-gam/config');

module.exports = ({
  accountId = '142181607',
  basePath,
} = {}) => {
  const config = new GAMConfiguration(accountId, { basePath });

  config
    .setTemplate('LEADERBOARD', {
      size: [[970, 90], [728, 90], [320, 100], [300, 250], [320, 50]],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 90], [728, 90]] },
        { viewport: [750, 0], size: [728, 90] },
        { viewport: [300, 0], size: [[320, 100], [300, 250], [320, 50]] },
      ],
    })
    .setTemplate('ROTATION', {
      size: [[970, 250], [970, 90], [728, 90], [320, 100]],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90], 'fluid'] },
        { viewport: [750, 0], size: [[728, 90], 'fluid'] },
        { viewport: [300, 0], size: [[300, 50], [320, 50], [320, 100], 'fluid'] },
      ],
    });

  return config;
};
