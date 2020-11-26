const gql = require('graphql-tag');

module.exports = gql`

fragment GearBlockContentFragment on Content {
  id
  type
  shortName
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
