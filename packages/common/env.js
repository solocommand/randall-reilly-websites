const { cleanEnv, validators } = require('@base-cms/env');

const { nonemptystr } = validators;

// @todo This should be removed once contact us is moved to core and the mailer service is created.
module.exports = cleanEnv(process.env, {
  RECAPTCHA_SECRET_KEY: nonemptystr({ desc: 'The Recaptcha secret key.' }),
  SENDGRID_API_KEY: nonemptystr({ desc: 'An API key for sending email via SendGrid.' }),
});
