/**
 * @module ui-bb-notification-stripe-ng
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbNotificationStripeNgKey from 'ui-bb-notification-stripe-ng';
 *
 * export const dependencyKeys = [
 *   uiBbNotificationStripeNgKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-notification-stripe
 * message="{{ $ctrl.status.text }}"
 * on-close="$ctrl.status = null;"
 * type="bg-{{ $ctrl.status.class }}"
 * timeout-second="5">
 * </ui-bb-notification-stripe>
 */
import angular from 'vendor-bb-angular';

import uiBbNotificationStripeComponent from './notification-stripe.component';
import uiBbNotificationStripeController from './notification-stripe.controller';

import '../styles/index.css';

/**
 * @description The angular module name
 * @name default
 * @type {string}
 */
export default angular.module('ui-bb-notification-stripe-ng', [])
  .controller('uiBbNotificationStripeController', [
    '$scope',
    '$sce',
    '$timeout',
    /* into */
    uiBbNotificationStripeController,
  ])
  .component('uiBbNotificationStripe', uiBbNotificationStripeComponent)
  .name;
