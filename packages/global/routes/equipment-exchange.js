const { asyncRoute } = require('@parameter1/base-cms-utils');
const { getAsArray, get } = require('@parameter1/base-cms-object-path');
const gql = require('graphql-tag');

module.exports = (app) => {
  app.get('/equipment-exchange', asyncRoute(async (req, res) => {
    const EQUIPMENT_EXCHANGE = gql`
      query EquipmentExchange($input: WebsiteScheduledContentQueryInput = {}, $siteId: ObjectID!) {
        websiteSite(input: { id: $siteId }) {
          id
          shortName
        }
        websiteScheduledContent(input: $input) {
          totalCount
          edges {
            node {
              id
              name
              teaser
              type
              publishedDate(input: { format: "YYYY-M-D" })
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
            }
          }
        }
      }
    `;
    const { type = '' } = req.query;
    const days = parseInt(req.query.days || 0, 10);
    const timestamp = Date.now() - (days * 1000 * 60 * 60 * 24);
    const after = new Date(timestamp);
    let limit = parseInt(req.query.limit || 10, 10);
    if (limit < 1) limit = 1;
    if (limit > 100) limit = 100;
    const skip = parseInt(req.query.skip || 0, 10);
    const input = {
      includeContentTypes: type.split('|').filter(v => v),
      ...(days && { after: after.getTime() }),
      pagination: {
        limit,
        skip,
      },
    };
    const siteId = req.app.locals.config.website('id');
    const variables = { input, siteId };
    const { data } = await req.apollo.query({ query: EQUIPMENT_EXCHANGE, variables });
    // const { websiteSite: site } = data;
    const formatted = getAsArray(data, 'websiteScheduledContent.edges').map((edge) => {
      const { node } = edge;
      const content = {
        id: node.id,
        name: node.name,
        teaser: node.teaser,
        primaryImage: get(node, 'primaryImage.src'),
        url: get(node, 'siteContext.url'),
        publishedDate: node.publishedDate,
      };
      return content;
    });
    res.json({ items: formatted, totalCount: get(data, 'allPublishedContent.totalCount') });
  }));
};
