module.exports = ({ req, type, inc = 1 } = {}) => {
  // Do nothing if no position key is passed.
  if (!type) return type;
  req.pos = req.pos || {};

  const val = parseInt(req.pos[type], 10) || 0;
  const n = inc + val;
  req.pos[type] = n;

  return `${type}|${n}`;
};
