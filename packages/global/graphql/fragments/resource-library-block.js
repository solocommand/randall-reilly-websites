const gql = require('graphql-tag');

module.exports = gql`

fragment ResourceLibraryBlockContentFragment on Content {
  id
  type
  shortName
  siteContext {
    path
  }
  primaryImage {
    id
    src
    alt
    isLogo
  }
}

`;
