const DragonFormsConfig = require('@randall-reilly/package-shared/config/dragon-forms');
// https://rrp.dragonforms.com/loading.do?omedasite=RRP5_EQnew
const config = new DragonFormsConfig({ url: 'https://rrp.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: '' })
  .addForm('newsletterPref', { omedasite: '' })
  .addForm('newsletterSubscribe', { omedasite: '' })
  .addForm('newsletterSignup', { omedasite: '', query: { pk: '' } });
module.exports = config;
