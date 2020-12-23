const gql = require('graphql-tag');

module.exports = gql`

fragment SectionFeedBlockContentFragment on Content {
  id
  type
  shortName
  teaser(input: { useFallback: false, maxLength: null })
  body
  siteContext {
    path
  }
  published
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
