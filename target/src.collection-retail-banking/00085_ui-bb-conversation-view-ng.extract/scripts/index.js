/**
 * @module ui-bb-conversation-view-ng
 */
import angular from 'vendor-bb-angular';
import ngSanitizeKey from 'vendor-bb-angular-sanitize';
import uiBbRichTextEditorNg from 'ui-bb-rich-text-editor-ng';

import component from './component';

export default angular.module('ui-bb-conversation-view-ng', [
  ngSanitizeKey, uiBbRichTextEditorNg,
])
.component('uiBbConversationViewNg', component)
.name;
