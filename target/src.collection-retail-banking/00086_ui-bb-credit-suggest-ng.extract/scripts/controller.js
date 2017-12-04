
import { isValidIBAN } from 'lib-bb-iban';
import FORMAT_AMOUNT_TEMPLATE_URL from './constants';

/**
 * @name uiBbCreditSuggestController
 * @ngkey uiBbCreditSuggestController
 * @type {object}
 * @description
 * Credit suggest component controller.
 */
export default function controller($element, $attrs, $filter, $templateCache, $timeout) {
  const i18nFilter = $filter('i18n');

  const GroupName = {
    INTERNAL: i18nFilter('ui-bb-credit-suggest-ng.group.internal'),
    EXTERNAL: i18nFilter('ui-bb-credit-suggest-ng.group.external'),
  };

  const ctrl = {};

  const EMPTY_VALUE = {
    name: '',
    bban: '',
    iban: '',
    isNew: true,
  };

  const ngModelCtrl = $element.controller('ngModel');
  const ibanInput = $element.find('input').eq(1);

  ibanInput[0].onblur = () => {
    ctrl.validateIban(ctrl.searchModel.IBAN);
    ctrl.$doCheck();
  };

  /**
   * @description
   * Called after this controller's element and its children have been linked
   * Initialize necessary functionality
   *
   * @name uiBbCreditSuggestController#$postLink
   * @type {function} $postLink
   */
  const $postLink = () => {
    if (ctrl.formatAmountTemplateUrl) {
      const formatAmountTemplate = $templateCache.get(ctrl.formatAmountTemplateUrl);
      $templateCache.put(FORMAT_AMOUNT_TEMPLATE_URL, formatAmountTemplate);
    }

    // Restore previous selection (if any)
    $timeout(() => {
      if (ctrl.selected) {
        ctrl.selectedSetter(ctrl.selected);
      }
    });
  };

  const isMyAccount = (identifier) =>
    ctrl.accounts && !!ctrl.accounts.find(acc => !acc.external && acc.identifier === identifier);

   /**
   * @description
   * Checks if iban should be validated, and if so, sets the result on model.
   *
   * @name uiBbCreditSuggestController#validateIban
   * @inner
   * @param {string} iban to be validated
   * @type {function} validateIban
   */
  const validateIban = iban => {
    const isIbanFocused = $element[0].querySelector('input:focus') === ibanInput[0];

    const isValid =
      !iban ||
      isIbanFocused ||
      isMyAccount(iban) ||
      isValidIBAN(iban);

    ngModelCtrl.$setValidity('iban', isValid);
    return isValid;
  };

  const filterByAccountOrContactName = (list, search) =>
    list.filter(item => ((item.name && item.name.toLowerCase().indexOf(search) !== -1) ||
      (item.contactPerson && item.contactPerson.toLowerCase().indexOf(search) !== -1)));

  const filterByIban = (list, search) =>
    list.filter(item => (item.IBAN &&
      (item.IBAN.toLowerCase().replace(' ', '').indexOf(search.replace(' ', '')) !== -1)));

  const filterByBban = (list, search) =>
    list.filter(item => (!item.IBAN && item.BBAN &&
      (item.BBAN.toLowerCase().replace(' ', '').indexOf(search.replace(' ', '')) !== -1)));

  /**
   * @description
   * Adds a group property to a list of accounts for the first occurence of a contactPerson.
   * Internal accounts will be in one seperate group.
   *
   * So: (cp = contactPerson, all with external prop):
   *  [{cp: 'Joost', id:'1', external: true},
   *  {cp: 'Karel', id:'2', external: true},
   *  {cp: 'SomeInternal', id:'3'},
   *  {cp: 'Joost', id:'4', external: true}]
   *
   * Will be:
   *  [{cp: 'SomeInternal', id:'3', group: [GroupName.INTERNAL]},
   *  {cp: 'Joost', id:'1', group: 'Joost'},
   *  {cp: 'Joost', id:'4'},
   *  {cp: 'Karel', id:'2', group: Karel}]
   *
   * @name uiBbCreditSuggestController#addGroupHeaders
   * @inner
   * @param {array} normalisedAccounts
   * @type {function} addGroupHeaders
   */
  const addGroupHeaders = (normalisedAccounts) => {
    const internalGroup = normalisedAccounts.filter(account => !account.external);

    if (internalGroup.length > 0) {
      // eslint-disable-next-line no-param-reassign
      internalGroup.forEach((i) => delete i.group);
      Object.assign(internalGroup[0], { group: GroupName.INTERNAL });
    }

    const externalGroup = normalisedAccounts.filter(account => account.external);
    // sort on contactPerson then within that on name. Two statements for readability
    externalGroup.sort((a, b) => (a.contactPerson < b.contactPerson ? -1 : 1));
    externalGroup.sort((a, b) => {
      if (a.contactPerson === b.contactPerson) {
        if (a.name < b.name) return -1;
        return 1;
      }
      return 0;
    });

    let previousContactName;
    for (const externalAccount of externalGroup) {
      if (externalAccount.contactPerson !== previousContactName) {
        externalAccount.group = externalAccount.contactPerson;
      }
      previousContactName = externalAccount.contactPerson;
    }

    return [...internalGroup, ...externalGroup];
  };

  /**
   * @description
   * Filters accounts by name
   * Called by the uiBBAutocomplete load-result - uses as a data composer for accounts
   *
   * @name uiBbCreditSuggestController#filterAccounts
   * @type {function}
   * @param {object} options as provided by uiBBAutocomplete, we only use searchQuery prop
   * @param {string} filterBy specifies which field triggers filtering (name, iban or bban).
   */
  const filterAccounts = (options, filterBy) => {
    if (options && options.searchQuery) {
      const normalisedAccounts = ctrl.getAccounts({ accounts: ctrl.accounts }) || ctrl.accounts;
      const normalizedSearch = options.searchQuery.toLowerCase();

      let filteredAccounts;
      if (filterBy === 'iban') {
        filteredAccounts = filterByIban(normalisedAccounts, normalizedSearch);
      } else if (filterBy === 'bban') {
        filteredAccounts = filterByBban(normalisedAccounts, normalizedSearch);
      } else {
        filteredAccounts = filterByAccountOrContactName(normalisedAccounts, normalizedSearch);
      }

      filteredAccounts.forEach((item) => Object.assign(item, { filteredBy: filterBy }));
      return Promise.resolve({
        totalItems: filteredAccounts.length,
        data: addGroupHeaders(filteredAccounts),
      });
    // eslint-disable-next-line no-else-return
    } else {
      const normalisedAccounts = ctrl.getAccounts({ accounts: ctrl.accounts }) || ctrl.accounts;
      return Promise.resolve({
        totalItems: normalisedAccounts.length,
        data: addGroupHeaders(normalisedAccounts),
      });
    }
  };

    /**
   * @description
   * Clears the selected beneficiary account
   *
   * @name uiBbCreditSuggestController#$clearSelected
   * @inner
   * @type {function} clearSelected
   */
  const clearSelected = () => {
    ctrl.selected = Object.assign({}, EMPTY_VALUE);
    ctrl.searchModel = {};
  };

  /**
   * @description
   * Default angular function running on digest cycle
   * Applies selected credit to model.
   *
   * @name uiBbCreditSuggestController#$doCheck
   * @type {function} $doCheck
   */
  const $doCheck = () => {
    const selected = ctrl.selected;

    if (!selected) {
      ngModelCtrl.$setPristine();
      clearSelected();
    } else if (validateIban(ctrl.searchModel.IBAN)) {
      selected.IBAN = selected.identifier;
      selected.identifier = ctrl.searchModel.IBAN || ctrl.searchModel.BBAN || selected.identifier;
      ctrl.selected.name = ctrl.searchModel.name || selected.name;
    }

    ngModelCtrl.$setViewValue(selected);
  };

  /**
   * @description
   * Sets the beneficiary account
   *
   * @name uiBbCreditSuggestController#$selectedSetter
   * @type {function} selectedSetter
   */
  const selectedSetter = (newValue) => {
    if (newValue || typeof newValue === 'object') {
      ctrl.selected = Object.assign({}, newValue);

      if (newValue.IBAN || ctrl.hideAccountNumber) {
        ctrl.searchModel.IBAN = newValue.IBAN;
        ctrl.searchModel.BBAN = '';
      } else {
        ctrl.searchModel.BBAN = newValue.BBAN;
        ctrl.searchModel.IBAN = '';
      }
      ctrl.searchModel.name = newValue.name;
    }

    return ctrl.selected;
  };

  ngModelCtrl.$formatters.push((credit) => {
    ctrl.selected = credit;
  });

  Object.assign(ctrl, {
    // models
    /**
     * @name uiBbCreditSuggestController#selected
     * @type {AccountView} selected
     */
    selected: undefined,
    searchModel: {},
    selectedSetter,

    // methods
    $postLink,
    $doCheck,
    filterAccounts,
    validateIban,
    clearSelected,

    // flags
    filterInFocus: false,
    ibanInFocus: false,
    markIbanStatus: false,
  });

  return ctrl;
}
