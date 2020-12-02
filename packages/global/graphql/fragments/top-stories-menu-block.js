const gql = require('graphql-tag');

module.exports = gql`

fragment TopStoriesMenuBlockContentFragment on Content {
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
