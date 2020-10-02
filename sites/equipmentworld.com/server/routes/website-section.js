const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const leadersFragment = require('@randall-reilly/package-leaders/graphql/fragments/leaders-section');
const contactUs = require('@randall-reilly/package-shared/templates/website-section/contact-us');
const leaders = require('@randall-reilly/package-shared/templates/website-section/leaders');
const queryFragment = require('@randall-reilly/package-shared/graphql/fragments/website-section-page');

const directory = require('../templates/website-section/directory');
const section = require('../templates/website-section');
const channel = require('../templates/website-section/channel');

const careers = require('../templates/website-section/careers');
const careersSubmit = require('../templates/website-section/careers/submit');

const channelAliases = [
  'tactical',
  'training-careers',
  'on-the-street',
  'investigations',
  'command-hq',
];

module.exports = (app) => {
  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(careers)', withWebsiteSection({
    template: careers,
    queryFragment,
  }));
  app.get('/:alias(careers/submit)', withWebsiteSection({
    template: careersSubmit,
    queryFragment,
  }));
  app.get('/:alias(directory)', withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(directory/[a-z0-9-/]+)', withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get(`/:alias(${channelAliases.join('|')})`, withWebsiteSection({
    template: channel,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
