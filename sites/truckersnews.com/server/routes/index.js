const sharedPublicFiles = require('@randall-reilly/package-global/routes/public-files');
const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const search = require('./search');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Shared Public Files
  sharedPublicFiles(app);

  // Homepage
  home(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Search
  search(app);

  // Website Sections
  websiteSections(app);
};
