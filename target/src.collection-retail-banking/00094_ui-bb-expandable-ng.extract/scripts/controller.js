/**
 * @name uiBbExpandableController
 * @type {function}
 * @description Component's controller
 */
function uiBbExpandableController() {
  this.isCollapsed = true;
  this.toggle = () => {
    this.isCollapsed = !this.isCollapsed;
  };
}

export default uiBbExpandableController;
