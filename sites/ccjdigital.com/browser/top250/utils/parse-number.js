import extractRangeValues from './extract-range-values';

/**
 * Parses a value into a min/max float tuple.
 * Accepts string ranges (e.g. 4 - 10) and single numbers, (e.g. 234)
 *
 * @param {object} params
 * @param {string} params.value
 * @return {number[]|null}
 */
export default ({ value } = {}) => {
  if (!value) return null;
  const values = extractRangeValues({ value });
  if (!values) return null;
  // remove commas then parse.
  const parsed = values.map(v => parseFloat(`${v}`.replace(/,/g, ''))).filter(v => !Number.isNaN(v));
  if (!parsed.length) return null;
  if (parsed.length === 1) {
    parsed.push(parsed[0]);
    return parsed;
  }
  return parsed;
};
