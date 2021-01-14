const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@randall-reilly/package-global/graphql/fragments/website-section-page');
const products = require('../templates/website-section/products');
const deathByTrench = require('../templates/website-section/death-by-trench');
const safetyWatch = require('../templates/website-section/safety-watch');
const section = require('../templates/website-section');

const cotyIndex = require('../templates/website-section/contractor-of-the-year');
const cotyNominate = require('../templates/website-section/contractor-of-the-year/nominate-a-contractor');
const cotyGallery = require('../templates/website-section/contractor-of-the-year/photo-gallery');

const coty = [
  { alias: 'contractor-of-the-year', template: cotyIndex },
  {
    alias: 'contractor-of-the-year/nominate-a-contractor',
    template: cotyNominate,
    aliasResolver: () => 'contractor-of-the-year',
    redirectOnPathMismatch: false,
  },
  {
    alias: 'contractor-of-the-year/photo-gallery',
    template: cotyGallery,
    aliasResolver: () => 'contractor-of-the-year',
    redirectOnPathMismatch: false,
  },
  { alias: 'contractor-of-the-year/success-stories', template: section },
];

module.exports = (app) => {
  coty.forEach(({ alias, template, ...rest }) => {
    app.get(`/:alias(${alias})`, withWebsiteSection({
      template,
      queryFragment,
      ...rest,
    }));
  });

  app.get('/:alias(death-by-trench)', withWebsiteSection({
    template: deathByTrench,
    queryFragment,
  }));
  app.get('/:alias(products)', withWebsiteSection({
    template: products,
    queryFragment,
  }));
  app.get('/:alias(safety-watch)', withWebsiteSection({
    template: safetyWatch,
    queryFragment,
  }));
  app.get('/:alias(safety-watch/[a-z0-9-/]+)', withWebsiteSection({
    template: safetyWatch,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
