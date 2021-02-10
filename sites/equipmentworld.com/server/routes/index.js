const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const equipmentExchange = require('./equipment-exchange');
const search = require('./search');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Equipment Exchange
  equipmentExchange(app);

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
