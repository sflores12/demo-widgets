import controller from './controller';

const component = {
  require: 'ngModel',
  bindings: {
    text: '=ngModel',
  },
  controller,
};

export default component;
