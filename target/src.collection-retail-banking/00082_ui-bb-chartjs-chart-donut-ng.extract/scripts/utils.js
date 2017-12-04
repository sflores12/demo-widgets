/* global angular */
// TODO: move to common library
/**
 * @name removeEmptyProperty
 * @type {function}
 * @inner
 * @description
 * Returns a copy of the scanned object without selected property
 * if the property is null or undefined
 *
 * @param {string} prop Name of the property
 * @param {object} obj Object to be scanned
 * @returns {object} Cleared object
 */
const removeEmptyProperty = (prop, obj) => {
  const target = obj;
  const item = target[prop];
  if (item === null || item === undefined) {
    delete target[prop];
  } else if (typeof item === 'object') {
    angular.forEach(item, (value, key) => removeEmptyProperty(key, item));
  }

  return target;
};

/**
 * @name removeEmptyProperties
 * @type {function}
 * @inner
 * @description
 * Removes all null or undefined properties from an object
 *
 * @param {object} obj Object to be scanned
 */
const removeEmptyProperties = (obj) =>
  angular.forEach(obj, (value, key) => removeEmptyProperty(key, obj));

export default {
  removeEmptyProperty,
  removeEmptyProperties,
};
