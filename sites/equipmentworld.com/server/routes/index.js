const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const equipmentExperts = require('./equipment-experts');
const search = require('./search');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Equipment Experts API
  equipmentExperts(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Search
  search(app);

  // Website Sections
  websiteSections(app);
};
