import Controller from './controller';

describe('ui-bbm-beneficiary-select-ng::controller', () => {
  let $element;

  const accountA = { name: 'Account A', identifier: '1234' };
  const accountB = { name: 'Account B', identifier: '1234 56' };
  const accountC = { name: 'Account C', identifier: '1234 56 78' };

  const $timeout = fn => fn();

  const $scope = {
    $apply: fn => fn(),
    $root: {
      $$phase: '',
    },
  };

  const nameInput = {
    name: 'name',
    on: (eventType, fn) => {
      if (eventType === 'focus') {
        nameInput.focus = () => fn();
      }

      if (eventType === 'blur') {
        nameInput.blur = () => fn();
      }
    },
    blur: () => { },
    focus: () => { },
  };

  const identifierInput = {
    name: 'identifier',
    on: (eventType, fn) => {
      if (eventType === 'focus') {
        identifierInput.focus = () => fn();
      }

      if (eventType === 'blur') {
        identifierInput.blur = () => fn();
      }
    },
    blur: () => { },
    focus: () => { },
  };

  Object.assign($timeout, {
    cancel: (timerId) => { },
  });

  const document = [{
    body: {},
  }];

  const ngModelCtrl = {
    $setViewValue: () => { },
    $setValidity: () => { },
  };

  let nameModelCtrl;
  let identifierModelCtrl;

  /**
   * --------------------------------------------------------------------------------------
   * Helpers
   * --------------------------------------------------------------------------------------
   */

  const createAccounts = () => [
    accountA,
    accountB,
    accountC,
  ];

  const createRootElement = () => {
    const nameTextfield = {
      controller: key => nameTextfieldControllerMap[key](),
      find: selector => nameTextfieldSelectorMap[selector](),
    };

    const identifierTextfield = {
      controller: key => identifierTextfieldControllerMap[key](),
      find: selector => identifierTextfieldSelectorMap[selector](),
    };

    const rootElementSelectorMap = {
      'ui-bbm-textfield-ng': () => ({
        eq: idx => [
          nameTextfield,
          identifierTextfield,
        ][idx],
      }),
    };

    const nameTextfieldSelectorMap = {
      'input': () => ({
        eq: idx => [nameInput][idx],
      }),
    };

    const identifierTextfieldSelectorMap = {
      'input': () => ({
        eq: idx => [identifierInput][idx],
      }),
    };

    const rootElementControllerMap = {
      ngModel: () => ngModelCtrl,
    };

    const nameTextfieldControllerMap = {
      ngModel: () => nameModelCtrl,
    };

    const identifierTextfieldControllerMap = {
      ngModel: () => identifierModelCtrl,
    };

    return {
      controller: key => rootElementControllerMap[key](),
      find: selector => rootElementSelectorMap[selector](),
    };
  };

  const changeIdentifier = (ctrl, value) => {
    setFocus(ctrl, 'identifier');

    ctrl.state.beneficiary.identifier = value;

    identifierModelCtrl.$viewValue = value;
    identifierModelCtrl.$viewChangeListeners.forEach(fn => fn());
  };

  const changeName = (ctrl, value) => {
    setFocus(ctrl, 'name');

    ctrl.state.beneficiary.name = value;

    nameModelCtrl.$viewValue = value;
    nameModelCtrl.$viewChangeListeners.forEach(fn => fn());
  };

  const createController = (props) => {
    $element = createRootElement();

    const ctrl = new Controller($element, $scope, $timeout, document);

    Object.assign(ctrl, props);

    return ctrl;
  };

  const setFocus = (ctrl, field) => {
    if (field === 'name') {
      nameInput.focus();
    } else if (field === 'identifier') {
      identifierInput.focus();
    }
  };

  beforeEach(() => {
    nameModelCtrl = {
      $setUntouched: () => { },
      $viewChangeListeners: [],
      $viewValue: '',
    };

    identifierModelCtrl = {
      $setValidity: () => { },
      $setUntouched: () => { },
      $validators: {
        uiBbIban: () => { },
        sameUiBbIban: () => { },
      },
      $viewChangeListeners: [],
      $viewValue: '',
    };
  });

  /**
   * --------------------------------------------------------------------------------------
   * Specs
   * --------------------------------------------------------------------------------------
   */

  describe('Events', () => {
    describe('$onChanges', () => {
      it('should update the beneficiary on model changes', () => {
        const ngModel = {
          name: 'Account A',
          identifier: 'account_a',
        };

        const ctrl = createController({ ngModel });

        ctrl.$postLink();
        ctrl.$onChanges({ ngModel });

        expect(ctrl.state.beneficiary).toEqual(ngModel);
      });
    });

    describe('On name change', () => {
      it('should update suggestions according to the name value', () => {
        const ctrl = createController({
          accounts: createAccounts(),
        });

        ctrl.$onChanges({
          accounts: {
            currentValue: ctrl.accounts,
          },
        });

        ctrl.$postLink();

        changeName(ctrl, 'a');

        expect(ctrl.state.suggestions).toEqual([
          accountA,
          accountB,
          accountC,
        ]);

        changeName(ctrl, '78');

        expect(ctrl.state.suggestions).toEqual([
          accountC,
        ]);
      });

      it('should open suggestions the list if the name is not empty and close it otherwise', () => {
        const ctrl = createController({
          accounts: createAccounts(),
        });

        ctrl.$onChanges({
          accounts: {
            currentValue: ctrl.accounts,
          },
        });

        ctrl.$postLink();

        expect(ctrl.state.isListOpened).toBe(false);

        changeName(ctrl, 'a');
        expect(ctrl.state.isListOpened).toBe(true);

        changeName(ctrl, '');
        expect(ctrl.state.isListOpened).toBe(false);
      });

      it('should create a new beneficiary with the given name', () => {
        const ctrl = createController({
          accounts: createAccounts(),
          ngModel: {},
        });

        ctrl.$onChanges({
          accounts: {
            currentValue: ctrl.accounts,
          },
        });

        ctrl.$postLink();

        spyOn(ngModelCtrl, '$setViewValue');

        changeName(ctrl, 'a');

        expect(ngModelCtrl.$setViewValue).toHaveBeenCalledWith({
          name: 'a',
          identifier: '',
          isNew: true,
        });
      });
    });

    describe('On identifier change', () => {
      it('should update suggestions according to the identifier value', () => {
        const ctrl = createController({
          accounts: createAccounts(),
        });

        ctrl.$onChanges({
          accounts: {
            currentValue: ctrl.accounts,
          },
        });

        ctrl.$postLink();

        changeIdentifier(ctrl, '1');

        expect(ctrl.state.suggestions).toEqual([
          accountA,
          accountB,
          accountC,
        ]);

        changeIdentifier(ctrl, '78');

        expect(ctrl.state.suggestions).toEqual([
          accountC,
        ]);
      });

      it('should open suggestions list if identifier is not empty and close it otherwise', () => {
        const accounts = createAccounts();

        const ctrl = createController({
          accounts,
        });

        ctrl.$onChanges({
          accounts: {
            currentValue: accounts,
          }
        });

        ctrl.$postLink();

        expect(ctrl.state.isListOpened).toBe(false);

        changeIdentifier(ctrl, 'a');
        expect(ctrl.state.isListOpened).toBe(true);

        changeIdentifier(ctrl, '');
        expect(ctrl.state.isListOpened).toBe(false);
      });
    });

    describe('On name input focus', () => {
      it('should update `state.activeField` property', () => {
        const accounts = createAccounts();
        const ctrl = createController({ accounts });

        ctrl.$onChanges({
          accounts: {
            currentValue: accounts,
          }
        });

        ctrl.$postLink();
        expect(ctrl.state.activeField).toBe('');

        nameInput.focus();
        expect(ctrl.state.activeField).toBe('name');
      });
    });

    describe('On identifier input focus', () => {
      it('should update `state.activeField` property', () => {
        const accounts = createAccounts();
        const ctrl = createController({ accounts });

        ctrl.$onChanges({
          accounts: {
            currentValue: accounts,
          }
        });

        ctrl.$postLink();
        expect(ctrl.state.activeField).toBe('');

        identifierInput.focus();
        expect(ctrl.state.activeField).toBe('identifier');
      });
    });

    describe('On suggestion click', () => {
      it('should set clicked account as a beneficiary', () => {
        const accounts = createAccounts();

        const ctrl = createController({
          accounts,
        });

        ctrl.$onChanges({
          accounts: {
            currentValue: accounts,
          }
        });

        ctrl.$postLink();

        changeName(ctrl, 'a');

        spyOn(ngModelCtrl, '$setViewValue');

        ctrl.onAccountClick(accounts[1]);

        expect(ctrl.state.beneficiary).toEqual(accountB);
        expect(ngModelCtrl.$setViewValue).toHaveBeenCalledWith(accountB);
      });
    });
  });

  describe('Validation', () => {
    it('should set the model as invalid if a new beneficiary was entered and creating is not allowed', () => {
      const ctrl = createController({
        accounts: createAccounts(),
        allowCreate: false,
      });

      spyOn(ngModelCtrl, '$setValidity');

      ctrl.$onChanges({
        accounts: {
          currentValue: ctrl.accounts,
        },
      });

      ctrl.$postLink();

      changeName(ctrl, 'a');
      changeIdentifier(ctrl, '123');

      identifierInput.blur();

      expect(ngModelCtrl.$setValidity).toHaveBeenCalledWith('createBeneficiary', false);
    });

    it('should set the model as valid if creating is allowed', () => {
      const ctrl = createController({
        accounts: createAccounts(),
        allowCreate: true,
      });

      spyOn(ngModelCtrl, '$setValidity');

      ctrl.$onChanges({
        accounts: {
          currentValue: ctrl.accounts,
        },
      });

      ctrl.$postLink();

      changeName(ctrl, 'a');
      nameInput.blur();

      expect(ngModelCtrl.$setValidity).toHaveBeenCalledWith('createBeneficiary', true);
    });

    it('should update validity when allowCreate parameter is changed', () => {
      const ctrl = createController({
        accounts: createAccounts(),
        allowCreate: false,
      });

      spyOn(ngModelCtrl, '$setValidity');

      ctrl.$onChanges({
        accounts: {
          currentValue: ctrl.accounts,
        },
      });

      ctrl.$postLink();

      changeName(ctrl, 'a');
      changeIdentifier(ctrl, 'a');

      identifierInput.blur();

      expect(ngModelCtrl.$setValidity).toHaveBeenCalledWith('createBeneficiary', false);

      ctrl.allowCreate = true;

      ctrl.$onChanges({
        allowCreate: {
          currentValue: ctrl.allowCreate,
        },
      });

      changeName(ctrl, 'a');
      changeIdentifier(ctrl, 'a');

      identifierInput.blur();

      expect(ngModelCtrl.$setValidity).toHaveBeenCalledWith('createBeneficiary', true);
    });

    it('should update validity when beneficiary was changed', () => {
      const accounts = createAccounts();

      const ctrl = createController({
        accounts,
        allowCreate: false,
      });

      spyOn(ngModelCtrl, '$setValidity');

      ctrl.$onChanges({
        accounts: {
          currentValue: ctrl.accounts,
        },
      });

      ctrl.$postLink();

      changeName(ctrl, 'a');
      changeIdentifier(ctrl, 'a');

      identifierInput.blur();

      expect(ngModelCtrl.$setValidity).toHaveBeenCalledWith('createBeneficiary', false);

      ctrl.ngModel = accounts[0];

      ctrl.$onChanges({
        ngModel: {
          currentValue: accounts[0],
        },
      });

      expect(ngModelCtrl.$setValidity).toHaveBeenCalledWith('createBeneficiary', true);
    });

    it('should attach the "sameUiBbIban" validator', () => {
      const ctrl = createController({
        accounts: createAccounts(),
        allowCreate: true,
      });

      ctrl.$postLink();

      expect(identifierModelCtrl.$validators['sameUiBbIban']).toBeDefined();
    });

    it('should set an error when the same iban has been typed', () => {      
      const debitAccount = {
        IBAN: "NL66INGB0280680451",
      };
      const ctrl = createController({
        debitAccount,
        accounts: createAccounts(),
        allowCreate: true,
      });

      spyOn(ngModelCtrl, '$setValidity');

      ctrl.$postLink();

      identifierModelCtrl.$modelValue = 'NL66INGB0280680451';
      identifierModelCtrl.$validators['sameUiBbIban']();

      expect(ngModelCtrl.$setValidity).toHaveBeenCalledWith('sameUiBbIban', false);
    });
  });
});
