const all = require('./all');

module.exports = {
  rootAlias: 'ccj-top-250',
  title: 'CCJ Top 250',
  teaser: 'Want to sort the CCJ Top 250 by revenues or number of trucks, tractors, trailers or drivers? Want to see and sort carriers by type of haul or geographic region? Want a copy of the CCJ Top 250 data sent to you in a PDF file? All of that is available completely free by providing the requested information below.',
  description: '',
  guides: {
    all,
    'dedicated-contract-carriage': {
      ...all,
      initialPrimaryOperation: 'Dedicated Contract Carriage',
    },
    'flatbed-specialized-heavy-haul': {
      ...all,
      initialPrimaryOperation: 'Flatbed/Specialized/Heavy Haul',
    },
    'general-freight': {
      ...all,
      initialPrimaryOperation: 'General Freight',
    },
    'household-goods': {
      ...all,
      initialPrimaryOperation: 'Household Goods',
    },
    intermodal: {
      ...all,
      initialPrimaryOperation: 'Intermodal',
    },
    'motor-vehicles': {
      ...all,
      initialPrimaryOperation: 'Motor Vehicles',
    },
    packages: {
      ...all,
      initialPrimaryOperation: 'Packages',
    },
    refrigerated: {
      ...all,
      initialPrimaryOperation: 'Refrigerated',
    },
    'tank-bulk-commodities': {
      ...all,
      initialPrimaryOperation: 'Tank/Bulk Commodities',
    },
  },
};
