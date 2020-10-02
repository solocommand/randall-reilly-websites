const gql = require('graphql-tag');

module.exports = gql`

fragment SharedWebsiteSectionListBlockFragment on WebsiteSection {
  id
  name
  fullName
  canonicalPath
}

`;
