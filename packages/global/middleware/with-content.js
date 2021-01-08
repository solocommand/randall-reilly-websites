const gql = require('graphql-tag');
const { withContent } = require('@base-cms/marko-web/middleware');

module.exports = (params = {}) => withContent({
  ...params,
  loaderQueryFragment: gql`
    fragment WithContentPrimarySectionFragment on Content {
      primarySection {
        id
        alias
      }
    }
  `,
});
