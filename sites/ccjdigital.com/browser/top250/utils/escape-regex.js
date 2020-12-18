const pattern = /[|\\{}()[\]^$+*?.-]/g;

export default (str) => {
  if (!str) return '';
  return `${str}`.replace(pattern, '\\$&');
};
