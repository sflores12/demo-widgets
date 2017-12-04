/**
 * @module ui-bb-draft-edit-ng
 */
import angular from 'vendor-bb-angular';
import uiBbRichTextEditorNg from 'ui-bb-rich-text-editor-ng';

import component from './component';
import '../styles/index.css';

export default angular.module('ui-bb-draft-edit-ng', [
  uiBbRichTextEditorNg,
])
.component('uiBbDraftEditNg', component)
.name;
