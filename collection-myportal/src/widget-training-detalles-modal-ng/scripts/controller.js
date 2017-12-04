/**
 * @module widget-training-detalles-modal-ng
 * @name DetallesModalController
 *
 * @description
 * Detalles modal
 */

export default function DetallesModalController(bus, hooks,$scope, widget) {
  const $ctrl = this;
  $ctrl.dtaAccounts = null;
  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name DetallesModalController#$onInit
   * @returns {void}
   */
  const $onInit = () => {
	  bus.subscribe('accounts:showDetails', function(data) {
		$scope.$evalAsync(function() {
        $ctrl.dtaAccounts = data;
      });
    });

    $ctrl.items = hooks.itemsFromModel([]);

    bus.publish('cxp.item.loaded', {
      id: widget.getId(),
    });

    bus.publish('bb.item.loaded', {
      id: widget.getId(),
    });
  };

  Object.assign($ctrl, {
    $onInit,

  });
}
