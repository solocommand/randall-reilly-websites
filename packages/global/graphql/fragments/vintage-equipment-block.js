const gql = require('graphql-tag');

module.exports = gql`

fragment VintageEquipmentBlockContentFragment on Content {
  id
  type
  shortName
  siteContext {
    path
  }
  primaryImage {
    src(input: { options: { auto: "format,compress", q: 70 } })
    alt
    isLogo
  }
}

`;
