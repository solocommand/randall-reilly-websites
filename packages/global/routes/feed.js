const { asyncRoute } = require('@parameter1/base-cms-utils');
const gql = require('graphql-tag');
module.exports = (app) => {
  app.get('/feed', asyncRoute(async (req, res) => {
    const FEED = gql`
      query Feed($input: WebsiteScheduledContentQueryInput = {}, $siteId: ObjectID!) {
        websiteSite(input: { id: $siteId }) {
          id
          shortName
          name
          url
        }
        websiteScheduledContent(input: $input) {
          totalCount
          edges {
            node {
              id
              name
              teaser
              body
              publishedDate(input: { format: "ddd, DD MMM YYYY hh:mm:ss ZZ" })
              labels
              siteContext {
                url
              }
              company {
                id
                name
              }
              primarySite {
                shortName
              }
              primaryImage {
                id
                src(input: { options: { auto: "format,compress", q: 70 } })
                alt
                isLogo
              }
              ... on Authorable {
                authors {
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

    const limit = 10;
    const skip = 0;
    const input = {
      includeContentTypes: ['Article'],
      pagination: {
        limit,
        skip,
      },
    };

    const siteId = req.app.locals.config.website('id');
    const variables = { input, siteId };
    const { data } = await req.apollo.query({ query: FEED, variables });
    const { websiteSite: site } = data;
    const rssAttributes = [
      'version="2.0"',
      'xmlns:content="http://purl.org/rss/1.0/modules/content/"',
      'xmlns:wfw="http://wellformedweb.org/CommentAPI/"',
      'xmlns:dc="http://purl.org/dc/elements/1.1/"',
      'xmlns:atom="http://www.w3.org/2005/Atom"',
      'xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"',
      'xmlns:slash="http://purl.org/rss/1.0/modules/slash/"',
    ].join(' ');
    const parts = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      `<rss ${rssAttributes}>`,
      '<channel>',
      '</channel>',
      '</rss>',
    ];
    res.set('Content-Type', 'application/rss+xml');
    res.send(parts.join('\n'));
  }));
};
