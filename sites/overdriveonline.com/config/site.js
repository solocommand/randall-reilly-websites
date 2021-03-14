const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const newsletter = require('./newsletter');

module.exports = {
  navigation,
  gam,
  nativeX,
  identityX,
  newsletter,
  company: 'Randall-Reilly, LLC',
  p1events: {
    tenant: 'randallreilly',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'overdriveonline.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.overdriveonline.com/files/base/randallreilly/all/image/static/ovd_logo.svg?h=40&auto=format,compress&q=70',
      srcset: [
        'https://img.overdriveonline.com/files/base/randallreilly/all/image/static/ovd_logo.svg?h=80&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.overdriveonline.com/files/base/randallreilly/all/image/static/ovd_logo.svg?h=35&auto=format,compress&q=70',
      srcset: [
        'https://img.overdriveonline.com/files/base/randallreilly/all/image/static/ovd_logo.svg?h=70&auto=format,compress&q=70 2x',
      ],
    },
  },
  tagline: 'The Voice of the American Trucker',
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/OverdriveTrucking/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/overdriveupdate', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/6650305/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCVb9_pwbvG99tK1apahFyIg?view_as=subscriber', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/overdriveonline/', target: '_blank' },
  ],
  podcastLinks: [
    { label: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/overdrive-online/id736806291' },
    // { label: 'Google Podcasts', href: '#' },
    { label: 'Spotify', href: 'https://open.spotify.com/show/6P7SIZeenGgvAaaIm2SOAq' },
    { label: 'Stitcher', href: 'https://www.stitcher.com/show/overdrive-radio' },
    { label: 'Soundcloud', href: 'https://soundcloud.com/overdriveradio' },
  ],
  oneTrust: [
    { path: '/collection', id: 'c04235aa-e9e0-4ff9-b558-5e21aa892d20' },
    { path: '/termsandprivacy', id: '45d9b939-c3de-4b71-8cbf-e2ffe621ff9c' },
  ],
  gtm: {
    containerId: 'GTM-NDC3FQX',
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
  sponsoredSectionLogos: {
    'partners-in-business': {
      src: 'https://img.overdriveonline.com/files/base/randallreilly/all/image/static/pib-tbs-logo.png?auto=format&w=88&fit=crop',
      width: '88px',
      height: '55px',
    },
  },
  sponsoredSectionNameLogos: {
    gear: {
      src: 'https://img.overdriveonline.com/files/base/randallreilly/all/image/static/ovd/trucker-gear-logo.png?auto=format&w=275&fit=crop',
      width: '275px',
    },
  },
};
