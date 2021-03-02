const { asyncRoute } = require('@parameter1/base-cms-utils');
module.exports = (app) => {
  app.get('/feed', asyncRoute(async (req, res) => {
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
