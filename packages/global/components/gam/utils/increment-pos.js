module.exports = ({ res, type, inc = 1 } = {}) => {
  // Do nothing if no position key is passed.
  if (!type) return type;
  res.locals.pos = res.locals.pos || {};

  const val = parseInt(res.locals.pos[type], 10) || 0;
  const n = inc + val;
  res.locals.pos[type] = n;

  return `${type}|${n}`;
};
