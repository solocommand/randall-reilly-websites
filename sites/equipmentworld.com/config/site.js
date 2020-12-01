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
      src: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/eqw-logo.svg?h=45',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/eqw-logo.svg?h=90 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/eqw-logo.svg?h=60',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/eqw-logo.svg?h=120 2x',
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
    href: '#',
    description: 'Sign up for the <span class="newsletter-name">Equipment World Daily</span> to keep up with...',
  },
};
