const { withMagazineIssue, withMagazinePublication } = require('@base-cms/marko-web/middleware');
const index = require('@randall-reilly/package-shared/templates/magazine');
const publication = require('@randall-reilly/package-shared/templates/magazine/publication');
const publicationFragment = require('@randall-reilly/package-shared/graphql/fragments/magazine-publication-page');
const issue = require('@randall-reilly/package-shared/templates/magazine/issue');
const issueFragment = require('@randall-reilly/package-shared/graphql/fragments/magazine-issue-page');

module.exports = (app) => {
  app.get('/magazine', (req, res) => {
    res.marko(index);
  });

  app.get('/magazine/:id([a-fA-F0-9]{24})', withMagazinePublication({
    template: publication,
    queryFragment: publicationFragment,
  }));

  app.get('/magazine/:id(\\d+)', withMagazineIssue({
    template: issue,
    queryFragment: issueFragment,
  }));
};
