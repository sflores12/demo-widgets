/**
 * @module widget-training-appointments-ng
 * @name AppointmentsController
 *
 * @description
 * Appointments
 */


import {
  E_AUTH,
  E_CONNECTIVITY
} from 'lib-bb-model-errors';

import filter from './utils/filter';

const errorMessage = (code) => ({
  [E_AUTH]: 'error.load.auth',
  [E_CONNECTIVITY]: 'error.load.connectivity',
}[code] || 'error.load.unexpected');

export default function AppointmentsController(bus, hooks, widget, model) {
  const $ctrl = this;

  $ctrl.filters = {
    advisor: null,
    customer: null
  };
  $ctrl.advisorSelected = null;
  $ctrl.customerSelected = null;
  $ctrl.advisorsHeader = 'Advisor';
  $ctrl.customersHeader = 'Customer';
  $ctrl.customers = [];
  $ctrl.advisors = [];
  $ctrl.appointments = [];
  $ctrl.filteredAppointments = [];
  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name AppointmentsController#$onInit
   * @returns {void}
   */
  const $onInit = () => {
    $ctrl.isLoading = true;
    $ctrl.appointments = [];

    model
      .getCustomers()
      .then(function(customers) {
        $ctrl.customers = customers;
      });

    model
      .getAdvisors()
      .then(function(advisors) {
        $ctrl.advisors = advisors;
      });

    model
      .getAdvisorAppointments()
      .then(appointments => {
        $ctrl.appointments = appointments;
        $ctrl.filteredAppointments = appointments.concat();
      })
      .catch(error => {
        $ctrl.error = errorMessage(error.code);
        bus.publish('widget-training-appointments-ng.load.failed', {
          error
        });
      })
      .then(() => {
        $ctrl.isLoading = false;
      });

    bus.publish('cxp.item.loaded', {
      id: widget.getId(),
    });

    bus.publish('bb.item.loaded', {
      id: widget.getId(),
    });

  };


  const onSelectCustomer = (customer) => {
    const $ctrl = this;
    $ctrl.filteredAppointments = filter({
      filtered: $ctrl.filteredAppointments,
      original: $ctrl.appointments,
      filters: $ctrl.filters,
      item: customer,
      name: 'customer',
      comparator: 'advisor'
    });
    $ctrl.customerSelected = customer;
  };
  const onSelectAppointments = (appointment) => {
    bus.publish('appointment:showDetails', appointment);
  };

  const onSelectAdvisor = (advisor) => {
    const $ctrl = this;
    $ctrl.filteredAppointments = filter({
      filtered: $ctrl.filteredAppointments,
      original: $ctrl.appointments,
      filters: $ctrl.filters,
      item: advisor,
      name: 'advisor',
      comparator: 'customer'
    });
    $ctrl.advisorSelected = advisor;
  };



  Object.assign($ctrl, {
    $onInit,
    onSelectCustomer,
    onSelectAdvisor,
    onSelectAppointments,

    /**
     * @description
     * The value returned from {@link Hooks.processItems} hook.
     * null if the items aren't loaded.
     *
     * @name AppointmentsController#items
     * @type {any}
     */
    //items: null,
    appointments: null,

    /**
     * @description
     * Loading status
     *
     * @name AppointmentsController#isLoading
     * @type {boolean}
     */
    isLoading: false,

    /**
     * @description
     * The error encountered when attempting to fetch from the model
     *
     * @name AppointmentsController#error
     * @type {ModelError}
     */
    error: null,

  });
}