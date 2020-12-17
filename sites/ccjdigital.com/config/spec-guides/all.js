const csv = require('csvtojson');
const path = require('path');

const columns = {
  rank: {
    label: 'RANK',
    type: 'number',
  },
  company: {
    label: 'COMPANY',
    type: 'string',
  },
  city: {
    label: 'CITY',
    type: 'string',
  },
  state: {
    label: 'STATE',
    type: 'string',
  },
  rank2019: {
    label: '2019 RANK',
    type: 'number',
  },
  website: {
    label: 'Website',
    type: 'string',
  },
  primaryOperation: {
    label: 'PRIMARY OPERATION',
    type: 'string',
  },
  revenue: {
    label: 'REVENUE',
    type: 'number',
    numberType: 'usCurrency',
  },
  revenue2018: {
    label: '2018 REVENUE',
    type: 'number',
    numberType: 'usCurrency',
  },
  leasedTrucks: {
    label: 'LEASED TRUCKS',
    type: 'number',
  },
  ownedTrucks: {
    label: 'OWNED TRUCKS',
    type: 'number',
  },
  totalTrucks: {
    label: 'TOTAL TRUCKS',
    type: 'number',
  },
  leasedTractors: {
    label: 'LEASED TRACTORS',
    type: 'number',
  },
  ownedTractors: {
    label: 'OWNED TRACTORS',
    type: 'number',
  },
  totalTractors: {
    label: 'TOTAL TRACTORS',
    type: 'number',
  },
  leasedTrailers: {
    label: 'LEASED TRAILERS',
    type: 'number',
  },
  ownedTrailers: {
    label: 'OWNED TRAILERS',
    type: 'number',
  },
  totalTrailers: {
    label: 'TOTAL TRAILERS',
    type: 'number',
  },
  companyDrivers: {
    label: 'COMPANY DRIVERS',
    type: 'number',
  },
  independentContractors: {
    label: 'INDEPENDENT CONTRACTORS',
    type: 'number',
  },
  totalDrivers: {
    label: 'TOTAL DRIVERS',
    type: 'number',
  },
};
const headerLabels = Object.keys(columns).map(key => key);
const colParser = Object.keys(columns).map((key) => {
  const obj = {};
  const colKey = columns[key].label;
  const { type } = columns[key];
  obj[colKey] = type;
  return (obj);
});
process.on('unhandledRejection', (e) => {
  throw e;
});

const getTableRows = async () => {
  const csvFile = path.resolve(process.cwd(), 'config/spec-guides/_csv/top250.csv');
  return csv({
    noheader: false,
    headers: headerLabels,
    colParser,
    trim: true,
    ignoreEmpty: true,
    delimiter: ',',
    checkType: true,
  }).fromFile(csvFile);
};

module.exports = {
  title: 'CCJ Top 250',
  teaser: 'Want to sort the CCJ Top 250 by revenues or number of trucks, tractors, trailers or drivers? Want to see and sort carriers by type of haul or geographic region? Want a copy of the CCJ Top 250 data sent to you in a PDF file? All of that is available completely free by providing the requested information below.',
  description: '<div clas="mb-block"><p><strong>Get the data how you want it!</strong></p> <p>Want to sort the CCJ Top 250 by revenues or number of trucks, tractors, trailers or drivers? Want to see and sort carriers by type of haul or geographic region? Want a copy of the CCJ Top 250 data sent to you in a PDF file?</p></div>',
  downloadLink: '/##########',
  tableRows: getTableRows(),
  columns,
  initialPrimaryOperation: null,
};
