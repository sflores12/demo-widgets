/**
 * @module model-training-appointments-ng
 *
 * @description
 * Model for widget-training-appointments-ng
 *
 * @example
 * import modelAppointmentsModuleKey, { modelAppointmentsKey } from 'model-training-appointments-ng';
 *
 * angular
 *   .module('ExampleModule', [
 *     modelAppointmentsModuleKey,
 *   ])
 *   .factory('someFactory', [
 *     modelAppointmentsKey,
 *     // into
 *     function someFactory(appointmentsModel) {
 *       // ...
 *     },
 *   ]);
 */
import angular from 'vendor-bb-angular';

import Model from './appointments';

import dataProviderAdvisorsKey, {
	advisorsDataKey
} from "mock.data-bb-advisors-http-ng";

import dataProviderAdvisorAppointmentsKey, {
	advisor_AppointmentsDataKey
} from "mock.data-bb-advisor_appointments-http-ng";

import dataProviderCustomersKey, {
	customersDataKey
} from "mock.data-bb-customers-http-ng";

const moduleKey = 'model-training-appointments-ng';
export const modelAppointmentsKey = `${moduleKey}:model`;

export default angular
	.module(moduleKey, [
		dataProviderAdvisorsKey,
		dataProviderAdvisorAppointmentsKey,
		dataProviderCustomersKey,
	])

.factory(modelAppointmentsKey, [
	'$q',
	advisorsDataKey,
advisor_AppointmentsDataKey,
customersDataKey,
	/* into */
	Model,
])

.name;