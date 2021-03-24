const distributorOfTheYearAward = require('../templates/static/distributor-of-the-year-award');
const sucessfulDealerAward = require('../templates/static/sucessful-dealer-award');

module.exports = (app) => {
  app.get('/distributor-of-the-year-award', (_, res) => { res.marko(distributorOfTheYearAward); });
  app.get('/successful-dealer-award', (_, res) => { res.marko(sucessfulDealerAward); });
};
