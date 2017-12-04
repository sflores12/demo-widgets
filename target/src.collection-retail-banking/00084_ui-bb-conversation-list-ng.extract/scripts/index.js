/**
 * @module ui-bb-conversation-list-ng
 *
 * @description Conversation list view component
 *
 * @example
 *
 *    <ui-bb-conversation-list-ng conversations="$ctrl.state.currentFolder.items"
 *                                on-select="$ctrl.onItemSelected(conversation)"
 *                                on-deselect="$ctrl.onItemDeselected(conversation)"
 *                                on-click="$ctrl.openItem(conversation)">
 *    </ui-bb-conversation-list-ng>
 */

import angular from 'vendor-bb-angular';

import component from './component';

/**
 * @name default
 * @type {string}
 * @description Angular module name
 */
export default angular.module('ui-bb-conversation-list-ng', [])
  .component('uiBbConversationListNg', component)
  .name;
