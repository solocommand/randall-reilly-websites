const gql = require('graphql-tag');

module.exports = gql`

fragment MagazineIssuePageFragment on MagazineIssue {
  id
  name
  description
  digitalEditionUrl
  canonicalPath
  coverImage {
    id
    src
  }
  publication {
    id
    name
    subscribeUrl
    renewalUrl
    reprintsUrl
    einquiryUrl
    canonicalPath
  }
}

`;
