const gql = require('graphql-tag');

module.exports = gql`
  query EquipmentExchange($input: WebsiteScheduledContentQueryInput = {}) {
    websiteScheduledContent(input: $input) {
      totalCount
      edges {
        node {
          id
          slug
          name
          body
          teaser
          siteContext {
            url
          }
          primarySite {
            shortName
          }
          primaryImage {
            id
            src(input: { options: { auto: "format,compress", q: 70 } })
          }
          keywords: taxonomy(input: { type: Tag }) {
            totalCount
            edges {
              node {
                id
                name
              }
            }
          }
          ...on Authorable {
            authors {
              totalCount
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
