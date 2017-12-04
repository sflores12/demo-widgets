import UiBbmScrollNgController from './scroll.controller';

/**
 * @name uiBbmScrollNgComponent
 * @type {object}
 * @description
 * Descriptor of the scroll component.
 *
 * @property {function} onScrollToEnd - callback function to invoke when the
 *           threshold of the distance to the end of the scrollable area has been reached.
 */
const uiBbmScrollNgComponent = {
  bindings: {
    onScrollToEnd: '&',
  },
  transclude: true,
  controller: [
    '$scope',
    '$element',
    '$document',
    '$window',
    UiBbmScrollNgController,
  ],
  template: `
    <div class="bbm-layout-scroll" data-ng-transclude>
    </div>
  `,
};

export default uiBbmScrollNgComponent;
