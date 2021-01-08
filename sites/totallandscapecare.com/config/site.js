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
      src: 'https://img.totallandscapecare.com/files/base/randallreilly/all/image/static/tlc-logo.svg?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.totallandscapecare.com/files/base/randallreilly/all/image/static/tlc-logo.svg?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.totallandscapecare.com/files/base/randallreilly/all/image/static/tlc-logo.svg?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.totallandscapecare.com/files/base/randallreilly/all/image/static/tlc-logo.svg?h=120&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/totallandscapecare/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/TLCmagazine', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/total-landscape-care-partner-solutions/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UC2oQucc3ULCnu09wude37-Q', target: '_blank' },
  ],
  gcse: {
    id: '2ffbde674775e605d',
  },
  oneTrust: [
    { path: '/collection', id: 'c04235aa-e9e0-4ff9-b558-5e21aa892d20' },
    { path: '/termsandprivacy', id: 'd8f2d6c5-d9af-4d60-a93f-7441ca9ad94c' },
  ],
  gtm: {
    containerId: 'GTM-TQW695L',
  },
  newsletterSignupBanner: {
    href: '#',
    description: 'Sign up for the <span class="newsletter-name">Total Landscape Care Daily</span> to keep up with...',
  },
  newsletterSignupBannerLarge: {
    href: '#',
    name: 'Total Landscape Care Daily',
    description: 'Sign up for the Total Landscape Care Daily to keep up with...',
  },
  newsletterSignupFooter: {
    action: 'https://randallreilly.dragonforms.com/loading.do',
    hiddenInputs: [
      { name: 'omedasite', value: 'ov_subscriptions' },
    ],
    name: 'Total Landscape Care Daily',
    description: 'Sign up for the <span class="newsletter-name">Total Landscape Care Daily</span> to keep up with...',
  },
  newsletterPushdown: {
    action: 'https://randallreilly.dragonforms.com/loading.do',
    hiddenInputs: [
      { name: 'omedasite', value: 'ov_subscriptions' },
    ],
    name: 'Total Landscape Care Daily',
    description: 'Sign up for the <span class="newsletter-name">Total Landscape Care Daily</span> to keep up with...',
  },
  wufoo: {
    userName: 'randallreilly',
  },
};
