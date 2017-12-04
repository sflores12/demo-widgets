import angular from 'vendor-bb-angular';
import uiBbPaginationKey from 'vendor-bb-uib-pagination';

import uiBbPaginatorDirective from './directive';
import uiBbPaginatorController from './controller';

/**
 * @name default
 * @type {string}
 * @description Pagination directive
 */
export default angular
  .module('ui-bb-paginator-ng', [uiBbPaginationKey])
  .directive('uiBbPaginatorNg', uiBbPaginatorDirective)
  .controller('uiBbPaginatorControllerNg', ['$scope', uiBbPaginatorController])
  .name;
