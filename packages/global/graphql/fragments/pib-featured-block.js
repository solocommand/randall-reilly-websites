const gql = require('graphql-tag');

module.exports = gql`

fragment PIBFeaturedBlockFragment on Content {
  id
  type
  shortName
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
