const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const search = require('./search');
const websiteSections = require('./website-section');
const staticPages = require('./static');

module.exports = (app) => {
  // Homepage
  home(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Search
  search(app);

  // Static Pages
  staticPages(app);

  // Website Sections
  websiteSections(app);
};
