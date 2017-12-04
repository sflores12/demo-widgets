import controller from './controller';
import template from '../template/template.ng.html';
const component = {
  controller,
  bindings: {
    items: '<',
    itemType: '<',
    onSelect: '&',
},
  template,
};

export default component;
