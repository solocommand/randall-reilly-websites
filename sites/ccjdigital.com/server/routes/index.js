const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const search = require('./search');
const top250 = require('./top250');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Spec Guides
  top250(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Search
  search(app);

  // Website Sections
  websiteSections(app);
};
