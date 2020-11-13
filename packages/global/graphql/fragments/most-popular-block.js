const gql = require('graphql-tag');

module.exports = gql`

fragment MostPopularBlockFragment on Content {
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
}

`;
