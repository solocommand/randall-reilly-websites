const gql = require('graphql-tag');

module.exports = gql`

fragment GlobalSectionInfoFragment on WebsiteSection {
  id
  name
  fullName
  canonicalPath
}

`;
