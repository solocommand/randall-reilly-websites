/**
 * Extracts a tuple of values from a value string.
 *
 * @param {object} params
 * @param {string} params.value
 * @return {string[]|null}
 */
export default ({ value } = {}) => {
  if (!value) return null;
  if (!/-/.test(value)) return [value, value];
  const parts = value.split('-').map(v => v.trim()).filter(v => v);
  if (!parts.length) return null;
  if (parts.length === 1) return [parts[0], parts[0]];
  return [parts[0], parts[1]];
};
