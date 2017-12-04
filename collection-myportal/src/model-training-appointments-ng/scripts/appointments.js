/**
 * Model factory for model-training-appointments-ng
 *
 * @inner
 * @type {function}
 * @param {Object} Promise An ES2015 compatible `Promise` object.
 *
 * @return {Object}
 */
export default function appointmentsModel(Promise, AdvisorsData, AdvisorAppointmentsData, CustomersData) {
  function getAdvisors() {
    return AdvisorsData
      .getAdvisors()
      .then(function(response) {
        return response.data;
      });
  }

  function getCustomers() {
    return CustomersData
      .getCustomers()
      .then(function(response) {
        return response.data;
      });
  }

  function getAdvisorAppointments() {
    return AdvisorAppointmentsData
      .getAdvisorAppointments()
      .then(function(response) {
        return response.data;
      });
  }
  return {
    getAdvisors,
    getCustomers,
    getAdvisorAppointments,
  };
}