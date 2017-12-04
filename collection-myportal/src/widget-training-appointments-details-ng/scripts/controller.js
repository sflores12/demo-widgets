/**
 * @module widget-training-appointments-details-ng
 * @name AppointmentsDetailsController
 *
 * @description
 * Appointments details
 */

export default function AppointmentsDetailsController(bus, hooks, $scope, widget) {
  const $ctrl = this;
  $ctrl.appointment = null;

  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name AppointmentsDetailsController#$onInit
   * @returns {void}
   */
  const $onInit = () => {
    bus.subscribe('appointment:showDetails', function(appointment) {
      $scope.$evalAsync(function() {
        $ctrl.appointment = appointment;
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