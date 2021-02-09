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
  p1events: {
    tenant: 'randallreilly',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'truckpartsandservice.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.truckpartsandservice.com/files/base/randallreilly/all/image/static/tps/tps_logo.svg?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.truckpartsandservice.com/files/base/randallreilly/all/image/static/tps/tps_logo.svg?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.truckpartsandservice.com/files/base/randallreilly/all/image/static/tps/tps_logo.svg?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.truckpartsandservice.com/files/base/randallreilly/all/image/static/tps/tps_logo.svg?h=120&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/TrucksPartsService/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/tpsmagazine', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/6559995/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCcBeotmXyiX_LLp7CYcjY_Q', target: '_blank' },
  ],
  gcse: {
    id: '281101e8295e963ba',
  },
  oneTrust: [
    { path: '/collection', id: 'c04235aa-e9e0-4ff9-b558-5e21aa892d20' },
    { path: '/termsandprivacy', id: 'd8f2d6c5-d9af-4d60-a93f-7441ca9ad94c' },
  ],
  gtm: {
    containerId: 'GTM-MWZ279J',
  },
  newsletterSignupBanner: {
    href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=tps_subscriptions',
    description: 'Get the business tips, industry insights and trending news every dealer and distributor needs to know in the <em>TPS</em> newsletter.',
  },
  newsletterSignupBannerLarge: {
    href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=tps_subscriptions',
    name: 'Don’t Miss Out',
    description: 'Get the business tips, industry insights and trending news every dealer and distributor needs to know in the <em>TPS</em> newsletter.',
  },
  newsletterSignupFooter: {
    action: 'https://randallreilly.dragonforms.com/loading.do',
    hiddenInputs: [
      { name: 'omedasite', value: 'tps_subscriptions' },
    ],
    name: 'Newsletter Just for Dealers and Distributors',
    description: 'Get dealer and aftermarket news, plus safety recalls and product reviews — delivered straight to your inbox.',
  },
  newsletterPushdown: {
    imagePath: 'static/newsletter-pushdown/tps-half.png',
    action: 'https://randallreilly.dragonforms.com/loading.do',
    hiddenInputs: [
      { name: 'omedasite', value: 'tps_subscriptions' },
    ],
    name: 'Don’t Miss Out',
    description: 'Join 20,000 dealer and aftermarket professionals who get helpful insights and important news delivered straight to their inbox with the <em>Trucks, Parts, Service</em> newsletter.',
  },
  wufoo: {
    userName: 'randallreilly',
  },
};
