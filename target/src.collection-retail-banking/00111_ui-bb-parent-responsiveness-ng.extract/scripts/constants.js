/**
 * @name BootstrapSizes
 * @type {BootstrapSize[]}
 *
 * @description
 * Array of BootstrapSize objects
 */
const BootstrapSizes = [
  {
    minWidth: 0,
    classPrefix: 'col-xs-',
  },
  {
    minWidth: 768,
    classPrefix: 'col-sm-',
  },
  {
    minWidth: 992,
    classPrefix: 'col-md-',
  },
  {
    minWidth: 1200,
    classPrefix: 'col-lg-',
  },
];

/**
 * @typedef
 * @name BootstrapSize
 * @type {object}
 * @property {number} minWidth Minimum width at which class prefix should apply
 * @property {string} classPrefix Bootstrap class prefix to be used
 */

export default BootstrapSizes;
