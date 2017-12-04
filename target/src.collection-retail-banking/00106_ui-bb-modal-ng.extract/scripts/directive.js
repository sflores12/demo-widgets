import controller from './modal.controller';

/**
 * @name uiBbModalNg
 * @type  {object}
 *
 * @description
 * Generic modal component with template transclution
 *
 * @property {boolean} is-open Modal open state
 * @property {boolean} animation Defines whether the modal should be animated
 * @property {string} size Defines size of the modal dialog (ex. 'sm', 'lg')
 * @property {boolean} keyboard Indicates whether the dialog should be closable by
 * hitting the ESC key.
 * @property {boolean|string} backdrop Controls presence of a backdrop. Allowed values:
 * true (default), false (no backdrop), 'static' (disables modal closing by click on the backdrop).
 * @property {function} on-open Function to be invoked on opening the modal
 * @property {function} on-close Function to be invoked on closing the modal
 */
const uiBbModalDirective = () => ({
  restrict: 'E',
  controller: ['$uibModal', '$scope', '$timeout', controller],
  controllerAs: 'modalCtrl',
  bindToController: {
    isOpen: '=',
    animation: '<',
    size: '<',
    keyboard: '<',
    backdrop: '<',
    onOpen: '&',
    onClose: '&',
  },
  scope: true,

  compile: element => {
    const template = element.html();
    // Clear element's inner html, so it will be rendered only in modal dialog
    element.empty();

    return {
      post: (scope, elem, attrs, ctrl) => {
        // eslint-disable-next-line no-param-reassign
        ctrl.modalTemplate = template;
      },
    };
  },
});

export default uiBbModalDirective;
