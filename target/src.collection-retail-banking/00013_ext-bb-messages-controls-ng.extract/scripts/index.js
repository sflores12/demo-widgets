/**
 * @module ext-bb-messages-controls-ng
 *
 * @description
 * Message center default extension.
 *
 * @example
 * <!-- messages widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-messages-controls-ng</value>
 * </property>
 */
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import uibAccordionKey from 'vendor-bb-uib-accordion';
import uiBbDraftEditNg from 'ui-bb-draft-edit-ng';
import i18nKey from 'ui-bb-i18n-ng';

import extHelpers from './helpers';

export const helpers = extHelpers;
export const dependencyKeys = [
  ngAriaModuleKey,
  uiBbDraftEditNg,
  uibAccordionKey,
  i18nKey,
];
