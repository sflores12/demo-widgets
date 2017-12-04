import plugins from 'lib-bbm-plugins';

import Controller from './controller';

describe('ui-bbm-dropdown-ng::controller', () => {
  const dropdown = {
    show: () => Promise.resolve(),
  };

  const ngModelCtrl = {
    $setViewValue: () => {},
  };

  /**
   * --------------------------------------------------------------------------------------
   * Helpers
   * --------------------------------------------------------------------------------------
   */

  const createElement = () => ({
    controller: (key) => (key === 'ngModel') ? ngModelCtrl : null,
  });

  const createController = attrs => (
    Object.assign(new Controller(createElement()), attrs)
  );

  const getOptions = () => ([
    { id: 'option_a', text: 'Option A' },
    { id: 'option_b', text: 'Option B' },
    { id: 'option_c', text: 'Option C' },
    { id: 'option_d', text: 'Option D' },
  ]);

  const setOptions = (ctrl, options) => {
    Object.assign(ctrl, { options });
    ctrl.$onChanges({ options: {} });
  };

  const setModel = (ctrl, ngModel) => {
    Object.assign(ctrl, { ngModel });
    ctrl.$onChanges({ ngModel: {} });
  };

  /**
   * --------------------------------------------------------------------------------------
   * Specs
   * --------------------------------------------------------------------------------------
   */

  beforeEach(() => {
    spyOn(plugins, 'Dropdown').and.returnValue(dropdown);
  });

  describe('API', () => {
    describe('#$onChanges', () => {
      it('should update the display value, when the model changes', () => {
        const ctrl = createController({
          ngModel: '',
          options: getOptions(),
        });

        expect(ctrl.displayValue).toBe('');

        setModel(ctrl, 'option_a');

        expect(ctrl.displayValue).toBe('Option A');
      });

      it('should update the display value, when the list of options changes', () => {
        const ctrl = createController({
          ngModel: 'option_c',
          options: [],
        });

        expect(ctrl.displayValue).toBe('');

        setOptions(ctrl, getOptions());

        expect(ctrl.displayValue).toBe('Option C');
      });
    });

    describe('#openDropdown', () => {
      it('should open a dropdown', () => {
        const ctrl = createController({
          ngModel: 'option_b',
          options: getOptions(),
          title: 'Select an option',
        });

        spyOn(dropdown, 'show').and.returnValue(Promise.resolve({ item: 2 }));

        ctrl.openDropdown();

        expect(dropdown.show).toHaveBeenCalledWith({
          title: 'Select an option',
          selectedIndex: 1,
          items: [
            'Option A',
            'Option B',
            'Option C',
            'Option D',
          ],
        });
      });

      it('should be ignored if a dropdown was already opened', () => {
        const ctrl = createController({
          ngModel: 'option_b',
          options: getOptions(),
          title: 'Select an option',
        });

        spyOn(dropdown, 'show').and.returnValue(Promise.resolve({ item: 2 }));

        ctrl.openDropdown();
        ctrl.openDropdown();

        expect(dropdown.show).toHaveBeenCalledTimes(1);
      });

      it('should apply the selected item', done => {
        const ctrl = createController({
          ngModel: 'option_a',
          options: getOptions(),
          title: 'Select an option',
        });

        spyOn(dropdown, 'show').and.returnValue(Promise.resolve({ item: 2 }));
        spyOn(ngModelCtrl, '$setViewValue');

        ctrl.openDropdown();

        setTimeout(() => {
          expect(ngModelCtrl.$setViewValue).toHaveBeenCalledWith('option_c')
          done();
        }, 0);
      });

      it('should update `opened` flag', done => {
        const ctrl = createController({
          ngModel: 'option_a',
          options: getOptions(),
          title: 'Select an option',
        });

        spyOn(dropdown, 'show').and.returnValue(Promise.resolve({ item: 2 }));

        expect(ctrl.opened).toBe(false);

        ctrl.openDropdown();

        expect(ctrl.opened).toBe(true);

        setTimeout(() => {
          expect(ctrl.opened).toBe(false);
          done();
        }, 0);
      });
    });
  });
});
