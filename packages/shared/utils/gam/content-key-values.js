const { get } = require('@base-cms/object-path');

module.exports = (content) => {
  const id = get(content, 'id');
  const type = get(content, 'type');
  return {
    cont_id: id,
    cont_type: type,
    comp_id: type === 'company' ? id : get(content, 'company.id'),
  };
};
