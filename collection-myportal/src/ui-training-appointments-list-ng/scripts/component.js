import controller from './controller';
import template from '../template/template.ng.html';

const component = {
  controller,
  bindings: {
    items: '<',
    onSelect: '&',
  },
  template,
};

export default component;
