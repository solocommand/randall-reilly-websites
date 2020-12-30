const gql = require('graphql-tag');

module.exports = gql`

fragment PartnersInBusinessBlockFragment on Content {
  id
  type
  shortName
  labels
  teaser(input: { useFallback: false, maxLength: null })
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
