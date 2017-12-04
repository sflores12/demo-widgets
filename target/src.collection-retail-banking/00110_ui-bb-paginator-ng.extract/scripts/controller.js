/**
 * @name UiBbPaginatorController
 * @type {function}
 * @description Paginator directive's controller
 */
export default function UiBbPaginatorController($scope) {
  /**
   * Helper inner ngModelController.
   */
  this.pageChanged = () => {
    if (!$scope.ngDisabled) {
      const params = { currentPage: $scope.ngModel };
      $scope.changePage({ params });
    }
  };
}
