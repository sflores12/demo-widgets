export const findFilter = (filterDefinition, searchKey) => {
  const operator = Object.keys(filterDefinition)[0]; // Get function operator
  const fnParams = filterDefinition[operator];
  let result = null;

  // Leaf logic
  if (fnParams[0].pathValue) {
    if (fnParams[0].pathValue[0] === searchKey) {
      return {
        operator,
        value: fnParams[1],
      };
    }
    return null;
  }

  // Branch logic
  for (let i = 0; result == null && i < fnParams.length; i++) {
    result = findFilter(fnParams[i], searchKey);
  }

  return result;
};

export default {
  findFilter,
};
