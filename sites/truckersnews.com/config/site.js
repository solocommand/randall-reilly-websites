const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');

module.exports = {
  navigation,
  gam,
  nativeX,
  company: 'Randall-Reilly, LLC',
  logos: {
    navbar: {
      src: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/tn-logo.svg?h=45',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/tn-logo.svg?h=90 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/tn-logo.svg?h=60',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/tn-logo.svg?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/truckersnewsmag/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/truckersnews', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UC55CJCUhEdHwOcQ_A4c9U9g', target: '_blank' },
  ],
  gcse: {
    id: 'cf19a2a833a06d9d4',
  },
  gtm: {
    containerId: 'GTM-KKR45JP',
  },
};
