import { CHART_LEVEL, CARD_COLOR_CLASSES, CHART_SLICE_CLASSES } from './constants';

/* global angular, document */
/**
 * @name uiBbBudgetCardController
 * @ngkey uiBbBudgetCardController
 * @type {function}
 *
 * @description
 * Card chart controller
 */
const uiBbBudgetCardController = function uiBbBudgetCardController(
  $scope,
  $element,
  $window,
  $timeout
) {
  const $ctrl = this;

  /**
   * @description
   * Holder for the timestamp
   *
   * @inner
   *
   * @name animationStart
   * @type {number}
   */
  let animationStart = null;

  /**
   * @name getRotatingElements
   * @type {function}
   *
   * @description
   * Returns rotating elements from DOM
   *
   * @inner
   * @returns {object} Object with left and right rotating element
   */
  const getRotatingElements = () => ({
    leftElToRotate: $element[0].querySelector(`.${CHART_SLICE_CLASSES.CLASS_CHART_SLICE_LEFT}`),
    rightElToRotate: $element[0].querySelector(`.${CHART_SLICE_CLASSES.CLASS_CHART_SLICE_RIGHT}`),
  });

  /**
   * @name checkAmountAnimationDelay
   * @type {function}
   *
   * @description
   * Helper function used to get the amount animation delay
   *
   * @inner
   *
   * @param {percentage} percentage of the full circle
   * @returns {number}
   */
  const checkAmountAnimationDelay = percentage => (
    percentage < 50 ? 300 : 600
  );

  /**
   * @name calculateRotationAngle
   * @type {function}
   *
   * @description
   * Helper function used to calculate the rotation angle
   *
   * @inner
   *
   * @param {percentage} percentage of the full circle
   * @returns {number}
   */
  const calculateRotationAngle = percentage =>
    Math.round(360 * ((percentage < 50 ? percentage : (percentage - 50)) / 100));

  /**
   * @name toggleFullSliceRotation
   * @type {function}
   *
   * @description
   * Helper function used to tougle the class 'rotate-n-180-deg'
   *
   * @inner
   *
   * @param {slice} DOM element
   * @returns {void}
   */
  const toggleFullSliceRotation = slice => (
    slice.classList.contains('rotate-n-180-deg')
      ? slice.classList.remove('rotate-n-180-deg')
      : slice.classList.add('rotate-n-180-deg')
  );

  /**
   * @name styleBudgetChart
   * @type {function}
   *
   * @description
   * Helper function used to style the budget chart
   *
   * @inner
   *
   * @returns {void}
   */
  const styleBudgetChart = () => {
    switch ($ctrl.chartColorLevel) {
      case CHART_LEVEL.WARNING:
        $ctrl.chartColor = CARD_COLOR_CLASSES.CLASS_CHART_WARNING;
        $ctrl.amountColor = CARD_COLOR_CLASSES.CLASS_LABEL_WARNING;
        break;
      case CHART_LEVEL.DANGER:
        $ctrl.wrapperClass =
          `${$ctrl.chartWrapperClass} ${CARD_COLOR_CLASSES.CLASS_CHART_DANGER_BRIGHT}`;

        $ctrl.chartColor = CARD_COLOR_CLASSES.CLASS_CHART_DANGER;
        $ctrl.amountColor = CARD_COLOR_CLASSES.CLASS_LABEL_DANGER;
        $ctrl.amountSpentColor = CARD_COLOR_CLASSES.CLASS_LABEL_DANGER;
        break;
      default:
        $ctrl.chartColor = CARD_COLOR_CLASSES.CLASS_CHART_SUCCESS;
        $ctrl.amountColor = CARD_COLOR_CLASSES.CLASS_LABEL_SUCCESS;
    }
  };

  /**
   * @name animateAmountLeft
   * @type {function}
   *
   * @description
   * Helper function used to animate number counting
   *
   * @inner
   *
   * @param {timestamp} current timestamp
   * @returns {void}
   */
  const animateAmountLeft = (timestamp) => {
    if (!$ctrl.availableAmount) {
      return;
    }

    if (!animationStart) {
      animationStart = timestamp;
    }

    const progress = timestamp - animationStart;

    if ($ctrl.animateAvailableAmount <= parseInt($ctrl.availableAmount.amount, 10)) {
      $ctrl.animateAvailableAmount = $ctrl.availableAmount.amount;
      return;
    }

    $ctrl.animateAvailableAmount -= 2;
    $scope.$digest();

    if (progress < checkAmountAnimationDelay($ctrl.spentPercentage)) {
      $window.requestAnimationFrame(animateAmountLeft);
    } else {
      $ctrl.animateAvailableAmount = $ctrl.availableAmount.amount;
      $scope.$digest();
    }
  };

  /**
   * @name checkChartAnimationDelay
   * @type {function}
   *
   * @description
   * Helper function used to get the chart animation delay
   *
   * @inner
   *
   * @param {percentage} percentage of the full circle
   * @returns {number}
   */
  const checkChartAnimationDelay = percentage => (
    percentage < 50 ? 600 : 300
  );

  /**
   * @name animateChart
   * @type {function}
   *
   * @description
   * Helper function used to animate donat chart
   *
   * @inner
   *
   * @returns {void}
   */
  const animateChart = () => {
    const perc = parseInt($ctrl.spentPercentage, 10);
    const isRightSide = perc >= 0 && perc < 50;
    const { leftElToRotate, rightElToRotate } = getRotatingElements();

    if (perc === 50) {
      toggleFullSliceRotation(leftElToRotate);
    } else if (isRightSide) {
      leftElToRotate.classList
        .add(`rotate-n-${calculateRotationAngle(perc)}-deg`, 'transition-base');
    } else if (!isRightSide || perc > 100) {
      toggleFullSliceRotation(leftElToRotate);
      leftElToRotate.classList.add('transition-base');

      $timeout(() => {
        toggleFullSliceRotation(leftElToRotate);
        leftElToRotate.classList.add('reset-slice');

        if (perc > 100) {
          rightElToRotate.classList.add('rotate-n-180-deg', 'transition-base');
        } else {
          rightElToRotate.classList
            .add(`rotate-n-${calculateRotationAngle(perc)}-deg`, 'transition-base');
        }
      }, checkChartAnimationDelay(perc));
    }
  };

  /**
   * @description
   * Resets chart slices classes to initial state
   *
   * @name Controller#resetChart
   * @type {function}
   * @inner
   */
  const resetChart = () => {
    $ctrl.amountSpentColor = null;
    $ctrl.wrapperClass = $ctrl.chartWrapperClass;
    const { leftElToRotate, rightElToRotate } = getRotatingElements();
    leftElToRotate.classList.value = rightElToRotate.classList.value = '';
    $timeout(() => {
      leftElToRotate.classList.add(CHART_SLICE_CLASSES.CLASS_CHART_SLICE_LEFT);
      leftElToRotate.classList.add($ctrl.chartColor);
      rightElToRotate.classList.add(CHART_SLICE_CLASSES.CLASS_CHART_SLICE_RIGHT);
      rightElToRotate.classList.add($ctrl.chartColor);
    });
  };

  /**
   * @description
   * Trigger all chart related animations (circle, amount)
   * and apply correct color
   *
   * @name Controller#doAnimations
   * @type {function}
   * @inner
   */
  const doAnimations = () => {
    // reset classes if they have been appended already (chart update)
    resetChart();

    $window.requestAnimationFrame(animateAmountLeft);
    $timeout(animateChart);
    styleBudgetChart();
  };

  /**
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @name Controller#$onInit
   * @type {function}
   * @returns {void}
   */
  const $onInit = () => {
    $scope.$watch('$ctrl.availableAmount.amount', doAnimations);
  };

  Object.assign($ctrl, {
    $onInit,

    /**
     * @description
     * Animated available amount
     *
     * @name animateAvailableAmount
     * @type {number}
     */
    animateAvailableAmount: $ctrl.spendingLimit ? $ctrl.spendingLimit.amount : null,

    /**
     * @description
     * Chart color
     *
     * @name chartColor
     * @type {string}
     */
    chartColor: '',

    /**
     * @description
     * Amount color
     *
     * @name amountColor
     * @type {string}
     */
    amountColor: '',

    /**
     * @description
     * Amount spent color
     *
     * @name amountSpentColor
     * @type {string}
     */
    amountSpentColor: '',
  });
};

export default uiBbBudgetCardController;
