const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const identityX = require('./identity-x');

module.exports = {
  navigation,
  gam,
  nativeX,
  identityX,
  company: 'Randall-Reilly, LLC',
  logos: {
    navbar: {
      src: 'https://img.truckersnews.com/files/base/randallreilly/all/image/static/tn-logo.svg?h=45',
      srcset: [
        'https://img.truckersnews.com/files/base/randallreilly/all/image/static/tn-logo.svg?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.truckersnews.com/files/base/randallreilly/all/image/static/tn-logo.svg?h=60',
      srcset: [
        'https://img.truckersnews.com/files/base/randallreilly/all/image/static/tn-logo.svg?h=120 2x',
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
  oneTrust: [
    { path: '/collection', id: 'c04235aa-e9e0-4ff9-b558-5e21aa892d20' },
    { path: '/termsandprivacy', id: 'd8f2d6c5-d9af-4d60-a93f-7441ca9ad94c' },
  ],
  gtm: {
    containerId: 'GTM-KKR45JP',
  },
  newsletterSignupBanner: {
    href: '#',
    description: 'Sign up for the <span class="newsletter-name">Trucker\'s News Daily</span> to keep up with...',
  },
  newsletterSignupBannerLarge: {
    href: '#',
    name: 'Trucker\'s News Daily',
    description: 'Sign up for the Trucker\'s News Daily to keep up with...',
  },
  newsletterPushdown: {
    action: '#',
    name: 'Trucker\'s News Daily',
    description: 'Sign up for the <span class="newsletter-name">Trucker\'s News Daily</span> to keep up with...',
  },
  wufoo: {
    userName: 'randallreilly',
  },
};
