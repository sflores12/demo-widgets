# ui-bb-rich-text-editor-ng


Version: **1.0.18**

UI component for enriched text editor

## Imports

* vendor-bb-angular
* vendor-bb-pell

---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbRichTextEditorNg from 'ui-bb-rich-text-editor-ng';

export const dependencyKeys = [
  uiBbRichTextEditorNg,
];

// file: templates/template.ng.html
<ui-bb-rich-text-editor-ng
  class="form-control"
  data-ng-model="$ctrl.text">
</ui-bb-rich-text-editor-ng>
```
