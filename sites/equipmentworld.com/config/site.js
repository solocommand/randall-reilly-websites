const navigation = require('./navigation');
const gam = require('./gam');

const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');
const leaders = require('./leaders');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  leaders,
  company: 'Randall Reilly, LLC',
  logos: {
    navbar: {
      src: 'https://img.equipmentworld.com/files/base/rr/ew/image/static/logo/site_logo.png?h=45',
      srcset: [
        'https://img.equipmentworld.com/files/base/rr/ew/image/static/logo/site_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.equipmentworld.com/files/base/rr/ew/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.equipmentworld.com/files/base/rr/ew/image/static/logo/site_logo.png?h=120 2x',
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
      logo: 'https://img.equipmentworld.com/files/base/rr/ew/image/static/logo/site_logo.png?h=60',
    },
    to: 'support@equipmentworld.com',
  },
  // inquiry: {
  //   enabled: true,
  //   directSend: true,
  //   sendTo: 'jsimon@southcomm.com',
  //   sendFrom: 'equipmentworld.com <noreply@baseplatform.io>',
  //   sendBcc: 'emailactivity@cygnus.com',
  //   logo: 'https://img.equipmentworld.com/files/base/rr/ew/image/static/logo/site_logo.png?h=60',
  //   bgColor: '#222222',
  // },
};
