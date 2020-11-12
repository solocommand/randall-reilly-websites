const navigation = require('./navigation');
const gam = require('./gam');

const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  company: 'Randall-Reilly, LLC',
  logos: {
    navbar: {
      src: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/tps-logo.svg?h=45',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/tps-logo.svg?h=90 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/tps-logo.svg?h=60',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/tps-logo.svg?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/truckpartsandservice/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/tpsmagazine', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/truck-parts-and-service-partner-solutions/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCcBeotmXyiX_LLp7CYcjY_Q', target: '_blank' },
  ],
  // identityX: {
  //   appId: 'NOT-SET',
  //   enabled: true,
  //   comments: { enabled: true },
  // },
  // radix: {
  //   enabled: true,
  //   appId: 'NOT-SET',
  //   submissionFieldIds: [
  //     { name: 'comments', id: 'NOT-SET' },
  //   ],
  // },
  gcse: {
    id: '281101e8295e963ba',
  },
  gtm: {
    containerId: '32818993',
  },
  // wufoo: {
  //   userName: 'NOT_SET',
  // },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#222222',
      logo: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/tps-logo.svg?h=60',
    },
    to: 'support@truckpartsandservice.com',
  },
  // inquiry: {
  //   enabled: true,
  //   directSend: true,
  //   sendTo: 'support@parameter1.com',
  //   sendFrom: 'truckpartsandservice.com <noreply@parameter1.com>',
  //   logo: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/tps-logo.svg?h=60',
  //   bgColor: '#222222',
  // },
};
