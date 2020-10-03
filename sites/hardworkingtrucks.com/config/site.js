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
      src: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/hwt_logo.png?h=45',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/hwt_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/hwt_logo.png?h=60',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/hwt_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/hardworkingtrucks/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/workingtrucks', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/hard-working-trucks-partner-solutions/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/hardworkingtrucks', target: '_blank' },
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
    id: '14c37f5dc982aa830',
  },
  gtm: {
    containerId: '32817981',
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
      logo: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/hwt_logo.png?h=60',
    },
    to: 'support@hardworkingtrucks.com',
  },
  // inquiry: {
  //   enabled: true,
  //   directSend: true,
  //   sendTo: 'support@parameter1.com',
  //   sendFrom: 'hardworkingtrucks.com <noreply@parameter1.com>',
  //   logo: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/hwt_logo.png?h=60',
  //   bgColor: '#222222',
  // },
};
