const configureGAM = require('@randall-reilly/package-global/config/gam');

const config = configureGAM({ basePath: 'eqw' });

config.lazyLoad = {
  enabled: true, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config
  .setAliasAdUnits('default', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'rotation' },
    { name: 'rail-1', templateName: 'GEAR', path: 'rail-1' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'rotation' },
    { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'wallpaper-left' },
    { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'wallpaper-right' },
  ])
  .setAliasAdUnits('contractor-of-the-year', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'coty-leaderboard' },
    { name: 'rotation', templateName: 'GEAR', path: 'coty-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'coty-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'coty-rotation' },
  ]);

const aliases = [
  'business',
  'workforce',
  'economic-trends',
  'regulations',
  'trucks',
  'alternative-power',
  'equipment-controls',
  'maintenance',
  'technology',
  'heavy-equipment',
  'roadbuilding-equipment',
  'compact-equipment',
  'attachments',
  'aerial-lifting-equipment',
  'light-equipment',
  'landscaping-equipment',
];

aliases.forEach(alias => config.setAliasAdUnits(alias, [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: `${alias}-leaderboard` },
  { name: 'rotation', templateName: 'ROTATION', path: `${alias}-rotation` },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: `${alias}-rotation` },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: `${alias}-rotation` },
]));

module.exports = config;
