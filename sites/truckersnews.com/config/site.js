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
  events: {
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'truckersnews.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.truckersnews.com/files/base/randallreilly/all/image/static/tn/tn-logo.svg?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.truckersnews.com/files/base/randallreilly/all/image/static/tn/tn-logo.svg?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.truckersnews.com/files/base/randallreilly/all/image/static/tn/tn-logo.svg?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.truckersnews.com/files/base/randallreilly/all/image/static/tn/tn-logo.svg?h=120&auto=format,compress&q=70 2x',
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
    href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=tn_subscriptions',
    description: 'Get the job alerts, industry insights and trending news every truck driver needs to know in the <em>Truckers News</em> newsletter. ',
  },
  newsletterSignupBannerLarge: {
    href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=tn_subscriptions',
    name: 'Don’t Miss Out',
    description: 'Get the job alerts, industry insights and trending news every truck driver needs to know in the <em>Truckers News</em> newsletter. ',
  },
  newsletterSignupFooter: {
    action: 'https://randallreilly.dragonforms.com/loading.do',
    hiddenInputs: [
      { name: 'omedasite', value: 'ov_subscriptions' },
    ],
    name: 'Newsletter Just for Truck Drivers',
    description: 'Get trucking news and insights, plus job alerts and trending gear — delivered straight to your inbox.',
  },
  newsletterPushdown: {
    action: 'https://randallreilly.dragonforms.com/loading.do',
    hiddenInputs: [
      { name: 'omedasite', value: 'ov_subscriptions' },
    ],
    name: 'Don’t Miss Out',
    description: 'Join 40,000 company drivers who get helpful insights and important news delivered straight to their inbox with the <em>Truckers News</em> newsletter.',
  },
  wufoo: {
    userName: 'randallreilly',
  },
  sponsoredLabelLogos: {
    'Sponsored by RoadPro': {
      src: 'https://img.overdriveonline.com/files/base/randallreilly/all/image/static/road-pro-logo.png?auto=format&w=109&fit=crop',
      width: '109px',
    },
  },
  sponsoredSectionNameLogos: {
    gear: {
      src: 'https://img.overdriveonline.com/files/base/randallreilly/all/image/static/ovd/trucker-gear-logo.png?auto=format&w=275&fit=crop',
      width: '275px',
    },
  },
};
