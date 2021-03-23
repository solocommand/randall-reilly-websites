const gql = require('graphql-tag');

module.exports = gql`
  query FindAll($contentIds: [Int!]!) {
    findAll(contentIds: $contentIds) {
      id
      contentId
      industry
      manufacturer
      model
    }
  }
`;
