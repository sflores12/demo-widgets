import mainComponent from './index';

describe('ui-bb-parent-responsiveness-ng', function() {
  let $compile, $componentController, scope, parent, element;
  const testHTML = 'Test';
  const xsClass = 'col-xs-12';
  const smClass = 'col-sm-6';
  const defaultTemplate = `
    <div class="row">
      <div ui-bb-parent-responsiveness-ng class="${xsClass} ${smClass}">${testHTML}</div>
    </div>
  `;

  const overrideTemplate = `
    <div class="row">
      <div ui-bb-parent-responsiveness-ng 
        class="${xsClass} ${smClass}"
        bootstrap-sizes="
        [
          {
            minWidth: 0,
            classPrefix: 'col-xs-',
          },
          {
            minWidth: 10000,
            classPrefix: 'col-sm-',
          },
          {
            minWidth: 20000,
            classPrefix: 'col-md-',
          },
          {
            minWidth: 30000,
            classPrefix: 'col-lg-',
          },
        ]"
      >${testHTML}</div>
    </div>
  `;

  function createElement(template = defaultTemplate) {
    let compiled = $compile(template)(scope);
    scope.$digest();
    return compiled;
  }

  describe('rendering', function() {
    beforeEach(angular.mock.module(mainComponent));

    beforeEach(angular.mock.inject(function($rootScope, _$compile_, _$componentController_) {
      $compile = _$compile_;
      scope = $rootScope.$new();
      $componentController = _$componentController_;
    }));

    beforeEach(() => {
      parent = createElement();
      element = parent.children();
      angular.element(document.body).append(parent[0]);
    });

    it('should render component', () => {
      expect(parent).toBeDefined();
      expect(element.html()).toBe(testHTML);
    });

    it('should have all defined classes for large parent', () => {
      parent[0].style.width = '1000px';
      angular.element(window).triggerHandler('resize');
      const classes = element[0].className.split(' ');
      expect([xsClass, smClass].every(item => classes.indexOf(item) >= 0)).toBe(true);
    });

    it('should have xs class only for small parent', () => {
      parent[0].style.width = '300px';
      angular.element(window).triggerHandler('resize');
      const classes = element[0].className.split(' ');
      expect(classes.indexOf(xsClass)).toBeGreaterThan(-1);
      expect(classes.indexOf(smClass)).not.toBeGreaterThan(-1);
    });

    it('should update to xs class only for small parent after custom event is being triggered', () => {
      const event = new Event('parentResized');
      parent[0].style.width = '300px';
      element[0].dispatchEvent(event);
      const classes = element[0].className.split(' ');
      expect(classes.indexOf(xsClass)).toBeGreaterThan(-1);
      expect(classes.indexOf(smClass)).not.toBeGreaterThan(-1);
    });

    it('should have xs class only, even for large parent, if sizes are overriden', () => {
      parent = createElement(overrideTemplate);
      element = parent.children();
      parent[0].style.width = '1000px';
      angular.element(window).triggerHandler('resize');
      const classes = element[0].className.split(' ');
      expect(classes.indexOf(xsClass)).toBeGreaterThan(-1);
      expect(classes.indexOf(smClass)).not.toBeGreaterThan(-1);
    });
  });
});
