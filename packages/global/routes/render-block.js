const { asyncRoute } = require('@base-cms/utils');
const createError = require('http-errors');
const TopStoriesMenu = require('../components/blocks/top-stories-menu');

const blocks = {
  'top-stories-menu': TopStoriesMenu,
};

const parseJSON = (value) => {
  try {
    return JSON.parse(value);
  } catch (e) {
    return {};
  }
};

module.exports = (app) => {
  app.get('/__render-block/:name', asyncRoute(async (req, res) => {
    const { name } = req.params;
    const input = parseJSON(req.query.input);
    const Component = blocks[name];
    if (!Component) throw createError(404, `No block component found for '${name}'`);
    return res.marko(Component, input);
  }));
};
