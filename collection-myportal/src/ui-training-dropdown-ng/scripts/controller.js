export default function controller() {
  const $ctrl = this;
  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name Controller#$onInit
   * @returns {void}
   */
  const $onInit = () => {
    // Component initialized
    const $ctrl = this;
    $ctrl.selected = null;
    $ctrl.select = function(item) {
      $ctrl.selected = item;
      $ctrl.onSelect({
        item: item
      });
    };
  };

  Object.assign($ctrl, {
    $onInit,
  });
}