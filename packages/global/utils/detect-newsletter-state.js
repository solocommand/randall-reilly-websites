const { get } = require('@base-cms/object-path');

const cookieName = 'enlPrompted';

module.exports = ({ req, res }) => {
  const hasCookie = get(req, `cookies.${cookieName}`);
  const fromEmail = false; // @todo eventually wire up omeda detection?

  if (!hasCookie) {
    // Expire in 14 days (2yr if already signed up)
    const days = fromEmail ? 365 * 2 : 14;
    const maxAge = days * 24 * 60 * 60 * 1000;
    res.cookie(cookieName, true, { maxAge });
  }

  return {
    hasCookie,
    fromEmail,
  };
};
