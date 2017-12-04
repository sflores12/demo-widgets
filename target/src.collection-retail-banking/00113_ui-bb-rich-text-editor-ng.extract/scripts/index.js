/**
 * @module ui-bb-rich-text-editor-ng
 * @description
 * UI component for enriched text editor
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbRichTextEditorNg from 'ui-bb-rich-text-editor-ng';
 *
 * export const dependencyKeys = [
 *   uiBbRichTextEditorNg,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-rich-text-editor-ng
 *   class="form-control"
 *   data-ng-model="$ctrl.text">
 * </ui-bb-rich-text-editor-ng>
 */

import angular from 'vendor-bb-angular';
import pell from 'vendor-bb-pell';
import uiBbRichTextEditorNg from './component';

import '../styles/index.css';
import '../../vendor-bb-pell/styles/pell.css';

export default angular
  .module('ui-bb-rich-text-editor-ng', [])
  .constant('pell', pell)
  .component('uiBbRichTextEditorNg', uiBbRichTextEditorNg)
  .name;
