const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentListBodyFragment on Content {
  id
  type
  shortName
  body
  published
  primaryImage {
    id
    src
    alt
    isLogo
  }
  ... on ContentPromotion {
    linkText
    linkUrl
  }
}

`;
