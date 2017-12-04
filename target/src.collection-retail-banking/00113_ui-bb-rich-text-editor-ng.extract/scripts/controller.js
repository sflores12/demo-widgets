/* global angular */
// eslint-disable-next-line func-names
const controller = ['$scope', '$element', 'pell', function ($scope, $element, pell) {
  const $ctrl = this;

  /**
   * @description
   * This function fixes some issues with the actionbar buttons:
   * * Actionbar buttons don't trigger form submit
   *   - https://github.com/jaredreich/pell/issues/68
   * * Actionbar buttons on click move focus back to the editor
   *   - https://github.com/jaredreich/pell/pull/30
   * @type {function}
   * @name fixPellButtons
   * @inner
   */
  const fixPellButtons = () => {
    const pellButtons = $element[0].getElementsByClassName('pell-button');
    const editor = $element[0].getElementsByClassName('pell-content')[0];
    const focusEditorFn = () => editor.focus();
    for (let i = 0; i < pellButtons.length; i++) {
      const btn = angular.element(pellButtons[i]);
      btn.attr('type', 'button');
      btn.on('click', focusEditorFn);
    }
  };

  /**
   * @description This function fixes the ngModel binding to be working
   * @type {function}
   * @name fixNgModelChange
   * @inner
   */
  const fixNgModelChange = () => {
    const editor = $element[0].getElementsByClassName('pell-content')[0];
    $scope.$watch('$ctrl.text', (newHtml = '') => {
      if (newHtml !== editor.innerHTML) {
        editor.innerHTML = newHtml;
      }
    });
  };

  /**
   * @description Removes a button with specified title in RTE action bar
   * @type {function}
   * @name removeRteButton
   * @inner
   */
  const removeRteButton = (title) => {
    const button = $element[0].querySelector(`.pell-button[title=${title}]`);
    angular.element(button).remove();
  };

  $ctrl.$onInit = () => {
    pell.init({
      element: $element[0],
      onChange: html => {
        $scope.$apply(() => {
          Object.assign($ctrl, { text: html });
        });
      },
      styleWithCss: false,
    });
    fixPellButtons();
    fixNgModelChange();
    removeRteButton('Image');
  };
}];

export default controller;
