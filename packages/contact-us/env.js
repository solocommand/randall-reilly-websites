const { cleanEnv, validators } = require('@base-cms/env');

const { nonemptystr } = validators;

module.exports = cleanEnv(process.env, {
  RECAPTCHA_SECRET_KEY: nonemptystr({ desc: 'The Recaptcha secret key.' }),
  SENDGRID_API_KEY: nonemptystr({ desc: 'An API key for sending email via SendGrid.' }),
});
