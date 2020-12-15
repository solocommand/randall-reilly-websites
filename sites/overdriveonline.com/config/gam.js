const configureGAM = require('@randall-reilly/package-global/config/gam');

const config = configureGAM({ basePath: 'ovd' });

config.lazyLoad = {
  enabled: false, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config
  .setTemplate('GEAR', {
    size: [300, 250],
  });

config
  .setAliasAdUnits('default', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'rotation' },
    { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'wallpaper-left' },
    { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'wallpaper-right' },
    { name: 'interstitial', path: 'interstitial' },
  ])
  .setAliasAdUnits('business', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'business-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'business-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'business-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'business-rotation' },
  ])
  .setAliasAdUnits('workforce', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'business-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'business-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'business-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'business-rotation' },
  ])
  .setAliasAdUnits('economic-trends', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'business-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'business-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'business-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'business-rotation' },
  ])
  .setAliasAdUnits('ecommerce-urban-delivery', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'business-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'business-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'business-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'business-rotation' },
  ])
  .setAliasAdUnits('regulations', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'business-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'business-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'business-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'business-rotation' },
  ])
  .setAliasAdUnits('equipment', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'business-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'business-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'business-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'business-rotation' },
  ])
  .setAliasAdUnits('alternative-power', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'business-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'business-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'business-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'business-rotation' },
  ])
  .setAliasAdUnits('equipment-controls', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'business-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'business-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'business-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'business-rotation' },
  ])
  .setAliasAdUnits('life', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'business-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'business-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'business-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'business-rotation' },
  ])
  .setAliasAdUnits('maintenance', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'business-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'business-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'business-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'business-rotation' },
  ])
  .setAliasAdUnits('technology', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'business-leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'business-rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'business-rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'business-rotation' },
  ])
  .setAliasAdUnits('gear', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'gear-leaderboard' },
    { name: 'leaderboard-2', templateName: 'LEADERBOARD', path: 'gear-leaderboard' },
    { name: 'rotation-1', templateName: 'GEAR', path: 'gear-rotation-1' },
    { name: 'rotation-2', templateName: 'GEAR', path: 'gear-rotation-2' },
    { name: 'rotation-3', templateName: 'GEAR', path: 'gear-rotation-3' },
  ]);

module.exports = config;
