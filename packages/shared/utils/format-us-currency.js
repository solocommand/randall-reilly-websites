module.exports = (number) => {
  if (number == null) return '';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
};
