const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const specGuides = require('./spec-guides');

module.exports = {
  navigation,
  gam,
  nativeX,
  specGuides,
  company: 'Randall-Reilly, LLC',
  logos: {
    navbar: {
      src: 'https://img.ccjdigital.com/files/base/randallreilly/all/image/static/ccj-logo.svg?h=45',
      srcset: [
        'https://img.ccjdigital.com/files/base/randallreilly/all/image/static/ccj-logo.svg?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.ccjdigital.com/files/base/randallreilly/all/image/static/ccj-logo.svg?h=60',
      srcset: [
        'https://img.ccjdigital.com/files/base/randallreilly/all/image/static/ccj-logo.svg?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/CCJMagazine/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ccjdigital', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/commercial-carrier-journal/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/CCJDigital', target: '_blank' },
  ],
  podcastLinks: [],
  gcse: {
    id: 'e121ab2d7edb3a172',
  },
  oneTrust: [
    { path: '/collection', id: 'c04235aa-e9e0-4ff9-b558-5e21aa892d20' },
    { path: '/termsandprivacy', id: 'd8f2d6c5-d9af-4d60-a93f-7441ca9ad94c' },
  ],
  gtm: {
    containerId: 'GTM-PHDPM24',
  },
  newsletterSignupBanner: {
    href: '#',
    description: 'Sign up for the <span class="newsletter-name">CCJ Daily</span> to keep up with...',
  },
  newsletterSignupBannerLarge: {
    href: '#',
    name: 'CCJ Daily',
    description: 'Sign up for the CCJ Daily to keep up with...',
  },
  newsletterPushdown: {
    action: '#',
    name: 'CCJ Daily',
    description: 'Sign up for the <span class="newsletter-name">CCJ Daily</span> to keep up with...',
  },
  wufoo: {
    userName: 'randallreilly',
  },
};
