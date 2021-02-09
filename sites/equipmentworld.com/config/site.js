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
    cookieDomain: process.env.NODE_ENV === 'production' ? 'equipmentworld.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.equipmentworld.com/files/base/randallreilly/all/image/static/eqw/eqw-logo.svg?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.equipmentworld.com/files/base/randallreilly/all/image/static/eqw/eqw-logo.svg?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.equipmentworld.com/files/base/randallreilly/all/image/static/eqw/eqw-logo.svg?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.equipmentworld.com/files/base/randallreilly/all/image/static/eqw/eqw-logo.svg?h=120&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/EquipmentWorld/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/Equipment_World', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/equipment-world/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/EquipmentWorld', target: '_blank' },
  ],
  gcse: {
    id: '9e5417f72997170d6',
  },
  oneTrust: [
    { path: '/collection', id: 'c04235aa-e9e0-4ff9-b558-5e21aa892d20' },
    { path: '/termsandprivacy', id: 'd8f2d6c5-d9af-4d60-a93f-7441ca9ad94c' },
  ],
  gtm: {
    containerId: 'GTM-WBB7QN7',
  },
  newsletterSignupBanner: {
    href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=eqw_subscriptions',
    description: 'Get the business tips, industry insights and trending news every contractor needs to know in the <span class="newsletter-name">Equipment World</span> newsletter.',
  },
  newsletterSignupBannerLarge: {
    href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=eqw_subscriptions',
    name: 'Don’t Miss Out',
    description: 'Get the business tips, industry insights and trending news every contractor needs to know in the <span class="newsletter-name">Equipment World</span> newsletter.',
  },
  newsletterSignupFooter: {
    action: 'https://randallreilly.dragonforms.com/loading.do',
    hiddenInputs: [
      { name: 'omedasite', value: 'eqw_subscriptions' },
    ],
    name: 'Newsletter Just for Contractors',
    description: 'Get construction news and insights, plus project tips and equipment reviews — delivered straight to your inbox.',
  },
  newsletterPushdown: {
    imagePath: 'static/newsletter-pushdown/eqw-half.png',
    action: 'https://randallreilly.dragonforms.com/loading.do',
    hiddenInputs: [
      { name: 'omedasite', value: 'eqw_subscriptions' },
    ],
    name: 'Don’t Miss Out',
    description: 'Join 55,000 construction professionals who get helpful insights and important news delivered straight to their inbox with the <span class="newsletter-name">Equipment World</span> newsletter.',
  },
  wufoo: {
    userName: 'randallreilly',
  },
};
