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
    cookieDomain: process.env.NODE_ENV === 'production' ? 'hardworkingtrucks.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.hardworkingtrucks.com/files/base/randallreilly/all/image/static/hwt/hwt-logo.svg?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.hardworkingtrucks.com/files/base/randallreilly/all/image/static/hwt/hwt-logo.svg?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.hardworkingtrucks.com/files/base/randallreilly/all/image/static/hwt/hwt-logo.svg?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.hardworkingtrucks.com/files/base/randallreilly/all/image/static/hwt/hwt-logo.svg?h=120&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/hardworkingtrucks/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/workingtrucks', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/hard-working-trucks-partner-solutions/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/hardworkingtrucks', target: '_blank' },
  ],
  gcse: {
    id: '14c37f5dc982aa830',
  },
  oneTrust: [
    { path: '/collection', id: 'c04235aa-e9e0-4ff9-b558-5e21aa892d20' },
    { path: '/termsandprivacy', id: 'd8f2d6c5-d9af-4d60-a93f-7441ca9ad94c' },
  ],
  gtm: {
    containerId: 'GTM-KN35FTZ',
  },
  newsletterSignupBanner: {
    href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=hwt_subscriptions',
    description: 'Get the business tips, industry insights and trending news every truck owner needs to know in the <em>Hard Working Trucks</em> newsletter.',
  },
  newsletterSignupBannerLarge: {
    href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=hwt_subscriptions',
    name: 'Don’t Miss Out',
    description: 'Get the business tips, industry insights and trending news every truck owner needs to know in the <em>Hard Working Trucks</em> newsletter.',
  },
  newsletterSignupFooter: {
    action: 'https://randallreilly.dragonforms.com/loading.do',
    hiddenInputs: [
      { name: 'omedasite', value: 'hwt_subscriptions' },
    ],
    name: 'Hardworking Trucks Daily',
    description: 'Sign up for the <span class="newsletter-name">Hardworking Trucks Daily</span> to keep up with...',
  },
  newsletterPushdown: {
    imagePath: 'static/newsletter-pushdown/hwt-half.png',
    action: 'https://randallreilly.dragonforms.com/loading.do',
    hiddenInputs: [
      { name: 'omedasite', value: 'hwt_subscriptions' },
    ],
    name: 'Newsletter Just for Truck Owners',
    description: 'Get news you need to know about pickups, commercial vans and Class 3-8 trucks — delivered straight to your inbox.',
  },
  wufoo: {
    userName: 'randallreilly',
  },
};
