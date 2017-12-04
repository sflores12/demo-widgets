import FORMAT_AMOUNT_TEMPLATE_URL from './constants';

/**
 * @name uiBBCreditSuggest
 * @type {object}
 *
 * @property {object[]} accounts List of accounts to filter and select with user input
 * @property {object} messages Localized messages
 * @property {string} custom-template-id Template ID (or URL)
 * which will be rendered as an option in dropdown
 * @property {boolean} allow-external Are external accounts included in list.
 * If not, IBAN field stays disabled
 * @property {boolean} hide-account-number
 * Hides account number (bban) and searching by bban functionality
 * @property {function} get-accounts
 * External method for transform accounts array into custom structure
 * Can be defined in extensions helpers
 * @property {void} iban-validation-classes Append has-success and has-error classes
 * to IBAN field on validation
 * @property {?String} formatAmountTemplateUrl Custom template url for popup element.
 */
const component = {
  bindings: {
    accounts: '<',
    /**
     * @description
     * List of messages to be shown by component
     *
     * @name uiBBCreditSuggest#messages
     * @type {object} messages
     */
    messages: '<',
    /**
     * @description
     * Template ID (or URL) which will be rendered
     * as an option in dropdown
     *
     * @name uiBBCreditSuggest#customTemplateId
     * @type {string} customTemplateId
     */
    customTemplateId: '@',
    allowExternal: '<',
    getAccounts: '&',
    formatAmountTemplateUrl: '@?',
    hideAccountNumber: '<?',
  },
  controller: 'uiBBCreditSuggestNgController',
  template: `
    <div class="credit-suggest has-feedback">
      <div class="form-group">
        <label data-i18n-key="form.label.name"></label>
        <div class="input-group col-xs-12">
         
          <ui-bb-autocomplete-search-ng
            data-ng-required="true"
            data-label-key="name"
            data-ng-focus="$ctrl.validateIban('blur')"
            data-ng-model="$ctrl.searchModel.name"
            data-load-result="$ctrl.filterAccounts(options, 'name')"
            data-ng-model-options="{
              getterSetter: true,
              allowInvalid: true
            }"
            data-ng-focus="$ctrl.validateIban()"
            data-on-select="$ctrl.selectedSetter($model)"
            data-on-clear="$ctrl.clearSelected()"
            data-search-box-config="{
              labels: { placeholder: $ctrl.messages.filterPlaceholder }
            }"
            data-match-template-url="ui-bb-credit-suggest-ng/autocomplete_match_custom.html"
            data-messages="{
                result: $ctrl.messages.oneResultFound,
                results: $ctrl.messages.resultsFound
              }">
          </ui-bb-autocomplete-search-ng>
        </div>
      </div>
      <div class="form-group">
        <label data-i18n-key="form.label.iban"></label>      
        <ui-bb-autocomplete-search-ng
            data-ng-required="!$ctrl.searchModel.BBAN"
            data-label-key="IBAN"
            data-disabled="$ctrl.searchModel.BBAN"
            data-ng-model="$ctrl.searchModel.IBAN"
            data-ng-blur="$ctrl.validateIban('blur')"
            data-ng-model-options="{
              getterSetter: true,
              allowInvalid: false
            }"
            data-load-result="$ctrl.filterAccounts(options, 'iban')"
            data-on-select="$ctrl.selectedSetter($model)"
            data-on-clear="$ctrl.clearSelected()"
            data-search-box-config="{
               showIcon : false,
               hideButton : true,
               labels: { placeholder: $ctrl.messages.accountPlaceholder },
             }"
            data-match-template-url="ui-bb-credit-suggest-ng/autocomplete_match_custom.html"
            data-messages="{
                result: $ctrl.messages.oneResultFound,
                results: $ctrl.messages.resultsFound
              }">
        </ui-bb-autocomplete-search-ng>
      </div>
      <div class="form-group"
        data-ng-if="!$ctrl.hideAccountNumber">
        <label data-i18n-key="form.label.accountnumber"></label>
        <ui-bb-autocomplete-search-ng
          data-ng-required="!$ctrl.searchModel.IBAN"
          data-disabled="$ctrl.searchModel.IBAN"
          data-label-key="BBAN"
          data-ng-model="$ctrl.searchModel.BBAN"
          data-ng-model-options="{
            getterSetter: true,
            allowInvalid: true
          }"
          data-load-result="$ctrl.filterAccounts(options, 'bban')"
          data-on-select="$ctrl.selectedSetter($model)"
          data-on-clear="$ctrl.clearSelected()"
          data-search-box-config="{
               showIcon : false,
               hideButton : true,
               labels: { placeholder: $ctrl.messages.accountnumberPlaceholder },
             }"
            data-match-template-url="ui-bb-credit-suggest-ng/autocomplete_match_custom.html"
            data-messages="{
                result: $ctrl.messages.oneResultFound,
                results: $ctrl.messages.resultsFound
              }">
        </ui-bb-autocomplete-search-ng>
      </div>
    </div>
    
    <script type="text/ng-template" id="ui-bb-credit-suggest-ng/autocomplete_match_custom.html">
      <div class="search-result-header px-2 py-3"
        data-ng-if="match.model.group" data-ng-bind-html="match.model.group" />
        <a href>
          <div class="row">
            <div class="col-xs-8">
              <div ng-if="match.model.accountName" data-ng-bind="match.model.accountName" />
              <div ng-if="match.model.name && !match.model.accountName"
                data-ng-bind-html="match.model.filteredBy == 'name' ? 
                (match.model.name | uibTypeaheadHighlight:query) : match.model.name" />
              <div data-ng-bind-html="match.model.filteredBy == 'iban' 
                || match.model.filteredBy == 'bban' ? 
                (match.model.identifier | uibTypeaheadHighlight:query) : match.model.identifier" />
            </div>
            <div class="col-xs-4" data-ng-if="match.model.amount" >
              <div data-ng-include="'${FORMAT_AMOUNT_TEMPLATE_URL}'" 
                data-ng-init="$option=match.model"></div>
            </div>
          </div>
        </a>
    </script>
    
    <script type="text/ng-template" id="${FORMAT_AMOUNT_TEMPLATE_URL}">
      <ui-bb-format-amount
        class="pull-right search-result-ammount"
        data-amount="$option.amount"
        data-currency="$option.currency"
        data-wrap>
      </ui-bb-format-amount>
    </script>
  `,
};

export default component;
