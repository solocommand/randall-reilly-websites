module.exports = (app) => {
  app.get('/:alias(contact-us|about-us)', (req, res) => {
    res.redirect(301, '/page/contact-us');
  });
};
