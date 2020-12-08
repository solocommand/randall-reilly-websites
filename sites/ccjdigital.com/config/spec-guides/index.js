const top250 = require('./top-250');

module.exports = {
  rootPath: '/specguide',
  title: 'OEM Off-Highway Spec Guides',
  description: '<em>OEM Off-Highway Spec Guides</em> are essential industry tools to help engineers specify the products they need for the next generation of heavy-duty on- and off-road mobile equipment. The Engine Spec Guide, Pump Spec Guide, and Motor Spec Guide are the industry’s first and only completely interactive component specifier that was custom built <strong>by engineers, for engineers.</strong>',
  guides: {
    top250,
  },
};
