const publicFiles = require('./public-files');
const renderBlock = require('./render-block');
const staticPage = require('./static-page');
const taxonomy = require('./taxonomy');

module.exports = (app) => {
  // Shared Public Files (e.g. ads.txt)
  publicFiles(app);

  // Remote component/block loader
  renderBlock(app);

  // Taxonomy pages (for handling redirects from old WP sites)
  taxonomy(app);

  // Static pages
  staticPage(app);
};
