const path = require('path');
const { asyncRoute } = require('@parameter1/base-cms-utils');
const { getAsArray, get } = require('@parameter1/base-cms-object-path');
const query = require('../graphql/queries/equipment-exchange-content');

const linkTo = (req, p, limit) => {
  const { protocol } = req;
  return `${protocol}://${req.get('host')}${req.path}?page=${p}&posts_per_page=${limit}`;
};

module.exports = (app) => {
  app.get('/api/marketplace-articles', asyncRoute(async (req, res) => {
    const page = parseInt(get(req, 'query.page', 1), 10);
    const limit = parseInt(get(req, 'query.posts_per_page', 20), 10);
    const skip = (page - 1) * limit;

    const input = {
      pagination: { limit, skip },
      sort: { field: 'published', order: 'desc' },
    };

    const siteId = req.app.locals.config.website('id');
    const variables = { input, siteId };
    const { data } = await req.apollo.query({ query, variables });

    const totalCount = get(data, 'allPublishedContent.totalCount');
    const lastPage = Math.ceil(totalCount / limit) || 1;

    res.json({
      data: getAsArray(data, 'allPublishedContent.edges').map((edge) => {
        const { node } = edge;
        return {
          post_id: node.id,
          post_name: node.slug,
          post_title: node.name,
          post_content: node.body,
          post_except: node.teaser,
          featured_image: get(node, 'primaryImage.src'),
          keywords: getAsArray(node, 'keywords.edges').map(e => get(e, 'node.name')),
          key_pairs: [], // @todo bring these in once BASE has support.
          blog: get(node, 'primarySite.shortName'),
          permalink: get(node, 'siteContext.url'),
          author: getAsArray(node, 'authors.edges').map(e => get(e, 'node.name')).join(', '),
        };
      }),
      links: {
        first: linkTo(req, 1, limit),
        last: linkTo(req, lastPage, limit),
        previous: page > 1 ? linkTo(req, page - 1, limit) : '',
        next: page < lastPage ? linkTo(req, page + 1, limit) : '',
      },
      meta: {
        current_page: page,
        from: skip + 1,
        to: skip + limit,
        total: totalCount,
        last_page: lastPage,
        posts_per_page: limit,
      },
    });
  }));

  app.get('/robots.txt', (_, res, next) => res.sendFile('robots.txt', {
    root: path.resolve(__dirname, '../public'),
    dotfiles: 'deny',
  }, (err) => { if (err) next(err); }));

  app.use('*', (_, res) => res.redirect(302, 'https://equipmentexperts.com'));
};
