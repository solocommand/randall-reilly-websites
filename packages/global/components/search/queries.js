const gql = require('graphql-tag');
const { extractFragmentData } = require('@base-cms/web-common/utils');

const BASE_BROWSE_QUERY = gql`
  query WebsiteSearchPage(
    $siteId: ObjectID!
    $now: Date!
    $phrase: String!
    $limit: Int = 18
    $skip: Int = 0
  ) {
    browseContent(input: {
      pagination: { limit: $limit, skip: $skip }
      match: { fields: [NAME, TEASER], phrase: $phrase }
      sort: { field: PUBLISHED, order: DESC }
      statuses: [PUBLISHED]
      schedules: {
        website: {
          siteIds: [$siteId]
          dates: [
            { field: START, before: $now }
            { field: END, after: $now, includeMissingValues: true }
          ]
        }
      }
    }) {
      totalCount
      edges {
        node {
          id
        }
      }
    }
  }
`;

const buildContentQuery = ({ fragment }) => {
  const { spreadFragmentName, processedFragment } = extractFragmentData(fragment);
  return gql`
    query WebsiteSearchPage(
      $ids: [Int!]!
      $limit: Int!
    ) {
      allContent(input: {
        ids: $ids,
        status: any,
        pagination: { limit: $limit }
        sort: { field: published, order: desc }
      }) {
        edges {
          node {
            ${spreadFragmentName}
          }
        }
      }
    }

    ${processedFragment}
  `;
};

module.exports = {
  BASE_BROWSE_QUERY,
  buildContentQuery,
};
