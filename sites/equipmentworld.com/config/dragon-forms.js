const DragonFormsConfig = require('@randall-reilly/package-shared/config/dragon-forms');
// https://rrp.dragonforms.com/loading.do?omedasite=RRP5_EQnew
const config = new DragonFormsConfig({ url: 'https://rrp.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'NOT-SET' })
  .addForm('newsletterPref', { omedasite: 'NOT-SET' })
  .addForm('newsletterSubscribe', { omedasite: 'NOT-SET' })
  .addForm('newsletterSignup', { omedasite: 'NOT-SET', query: { pk: '' } });
module.exports = config;
