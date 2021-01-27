const { getAsArray } = require('@parameter1/base-cms-object-path');

module.exports = (content) => {
  const sections = getAsArray(content, 'websiteSchedules').map(({ section }) => section);
  const filtered = [];
  sections
    .filter(({ alias }) => /^aftermarket-truck-parts-suppliers/.test(alias))
    .sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA > nameB) return 1;
      if (nameA < nameB) return -1;
      return 0;
    }).reduce((m, section) => {
      m.set(section.alias, section);
      return m;
    }, new Map()).forEach((section) => {
      filtered.push(section);
    });
  return filtered;
};
