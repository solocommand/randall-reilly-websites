const pattern = /^(\w+)\|(\d+)$/;

module.exports = ({ req, pos, inc = 1 } = {}) => {
  // Do nothing if no position key is passed.
  if (!pos) return pos;
  req.pos = req.pos || {};

  const matches = pattern.exec(pos);
  const key = matches && matches[1] ? matches[1] : pos;
  const val = matches && matches[1] ? parseInt(matches[2], 10) : (req.pos[key] || 0);
  const n = inc + val;

  req.pos[key] = n;

  return `${key}|${n}`;
};
