/**
 * @name  prepareTemplate
 * @description Prepares message template by sanitizing tags and applying link if needs
 * @type {function}
 * @inner
 * @param  {string} template HTML template
 * @param  {boolean} hasLink True if the link should apply link
 *
 * @return {string}          Prepared message template
 */
const prepareTemplate = (template, hasLink) => {
  let preparedTemplate = template.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  if (hasLink) {
    preparedTemplate = preparedTemplate.replace(/\{\{(.+?)\}\}/g, (str, text) => (
      `<a target="_blank" href="{{link}}" data-ng-click="$ctrl.onLinkClick($event)">${text}</a>`
    ));
  }

  return preparedTemplate;
};

/**
 * @name  prepareElement
 * @description Prepares element structure and base styles
 * @type {function}
 * @inner
 * @param  {object} elem        Angular element
 * @param  {number} linesLength Number of visible lines
 * @param  {object} $window     Window object
 *
 * @return {object}             Links to wrapper, content and suffix elements
 */
const prepareElement = (elem, linesLength, $window) => {
  const isMultiline = linesLength > 1;
  const wrapperTemplate = `<span><span></span>${isMultiline ? '<span>...</span>' : ''}</span>`;
  const wrapper = elem.html(wrapperTemplate).children();
  const content = wrapper.children().eq(0);
  const suffix = isMultiline ? wrapper.children().eq(1) : null;

  if (!!linesLength) {
    const styles = $window.getComputedStyle(elem[0]);
    const lineHeight = parseFloat(styles.getPropertyValue('line-height'));

    elem
      .addClass(isMultiline ? 'multiline-ellipsis' : 'ellipsis')
      .css('height', isMultiline ? `${linesLength * lineHeight}px` : 'auto');
  }

  return { wrapper, content, suffix };
};

/**
 * @name  truncateElement
 * @description Applies truncating to message
 * @type {function}
 * @inner
 * @param  {object} elem Angular element
 * @param  {object} wrapper Link to wrapper element
 * @param  {object} content Link to content element
 * @param  {object} suffix Link to suffix element
 */
const truncateElement = (elem, wrapper, content, suffix) => {
  while (wrapper[0].offsetHeight > elem[0].offsetHeight) {
    const nodes = content.contents();
    const lastNode = nodes.eq(nodes.length - 1);
    const nodeText = lastNode.text();
    const clippedText = nodeText.replace(/\s*\S*\s*$/, '');

    if (clippedText.length) {
      lastNode.text(clippedText);
    } else {
      lastNode.remove();
    }

    content.data('is-truncated', true);
  }

  suffix.css('visibility', content.data('is-truncated') ? 'visible' : 'hidden');
};

const uiBbMessageDirective = function uiBbMessageDirective($compile, $window, $timeout) {
  return {
    restrict: 'E',
    scope: {
      link: '<',
      preventDefault: '=',
      template: '<',
      onLinkClick: '&',
      visibleLinesLength: '<',
    },
    transclude: false,
    link: (scope, elem) => {
      const hasLink = !!(scope.link || scope.onLinkClick);
      const template = prepareTemplate(scope.template, hasLink);
      const { wrapper, content, suffix } = prepareElement(elem, scope.visibleLinesLength, $window);

      let cachedElemWidth = elem[0].offsetWidth;
      let resizeRef = null;

      /**
       * @name  initContent
       * @description Init message content
       * @type {function}
       * @inner
       */
      const initContent = () => {
        content.data('is-truncated', false);
        content.html(template);
        $compile(content.contents())(scope);
      };

      /**
       * @name  onResize
       * @description Applies when resize method fired
       * @type {function}
       * @inner
       */
      const onResize = () => {
        $timeout.cancel(resizeRef);
        resizeRef = $timeout(() => {
          const newElemWidth = elem[0].offsetWidth;

          if (newElemWidth !== cachedElemWidth) {
            if (newElemWidth > cachedElemWidth) {
              initContent();
            }

            cachedElemWidth = newElemWidth;
            truncateElement(elem, wrapper, content, suffix);
          }
        }, 75);
      };

      initContent();

      if (scope.visibleLinesLength > 1) {
        truncateElement(elem, wrapper, content, suffix);

        $window.addEventListener('resize', onResize);
      }

      scope.$on('$destroy', () => {
        $window.removeEventListener('resize', onResize);
      });
    },
    controller: 'uiBbMessageController',
    controllerAs: '$ctrl',
  };
};

/**
 * @name uiBbMessageDirective
 * @type {function}
 *
 * @property {string} message Message content
 * @property {string} link Link that will added in message instead of `{{ link }}`
 * @property {boolean} preventDefault true if need to prevent default event when click on link
 * @property {function} onLinkClick callback function when click on link
 * @property {number} visibleLinesLength Number of lines to be visible. If message has more lines it
 * will be truncated by ellipsis. If parameter is not set message will not be truncated.
 */
export default uiBbMessageDirective;
