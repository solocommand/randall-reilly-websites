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
  gtm: {
    containerId: 'NOT-SET',
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
  //   sendTo: 'jsimon@southcomm.com',
  //   sendFrom: 'hardworkingtrucks.com <noreply@baseplatform.io>',
  //   sendBcc: 'emailactivity@cygnus.com',
  //   logo: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/hwt_logo.png?h=60',
  //   bgColor: '#222222',
  // },
};
