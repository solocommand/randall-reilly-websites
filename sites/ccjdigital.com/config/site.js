const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const top250 = require('./top250');
const identityX = require('./identity-x');

module.exports = {
  navigation,
  gam,
  nativeX,
  identityX,
  top250,
  company: 'Randall-Reilly, LLC',
  logos: {
    navbar: {
      src: 'https://img.ccjdigital.com/files/base/randallreilly/all/image/static/ccj-logo.svg?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.ccjdigital.com/files/base/randallreilly/all/image/static/ccj-logo.svg?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.ccjdigital.com/files/base/randallreilly/all/image/static/ccj-logo.svg?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.ccjdigital.com/files/base/randallreilly/all/image/static/ccj-logo.svg?h=120&auto=format,compress&q=70 2x',
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
    href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=ccj_subscriptions',
    description: 'Get the business tips, industry insights and trending news every trucking professional needs to know in the CCJ newsletter.',
  },
  newsletterSignupBannerLarge: {
    href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=ccj_subscriptions',
    name: 'Don’t Miss Out',
    description: 'Get the business tips, industry insights and trending news every trucking professional needs to know in the CCJ newsletter.',
  },
  newsletterSignupFooter: {
    action: 'https://randallreilly.dragonforms.com/loading.do',
    hiddenInputs: [
      { name: 'omedasite', value: 'ccj_subscriptions' },
    ],
    name: 'Newsletter Just for Trucking Professionals',
    description: 'Get trucking news and insights, plus management tips and regulation updates — delivered straight to your inbox.',
  },
  newsletterPushdown: {
    imagePath: 'static/newsletter-pushdown/ccj-half.png',
    action: 'https://randallreilly.dragonforms.com/loading.do',
    hiddenInputs: [
      { name: 'omedasite', value: 'ccj_subscriptions' },
    ],
    name: 'Don’t Miss Out',
    description: 'Join 80,000 trucking professionals who get helpful insights and important news delivered straight to their inbox with the CCJ newsletter.',
  },
  wufoo: {
    userName: 'randallreilly',
  },
};
