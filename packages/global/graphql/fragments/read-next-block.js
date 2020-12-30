const gql = require('graphql-tag');

module.exports = gql`

fragment ReadNextBlockContentFragment on Content {
  id
  type
  shortName
  labels
  published
  siteContext {
    path
  }
  primarySection {
    id
    name
    fullName
    canonicalPath
  }
  primaryImage {
    id
    src
    alt
    isLogo
  }
}

`;
