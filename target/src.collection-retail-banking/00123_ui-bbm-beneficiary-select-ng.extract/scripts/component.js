/**
 * @name uiBBMBeneficiarySelect
 * @type {Object}
 *
 * @property {Array.<AccountsView>} accounts List of accounts to filter and select with user input
 * @property {boolean} allowCreate Is creating of a new beneficiary allowed
 * @property {Object} messages Localized messages
 * @property {Object} debitAccount Debit Account
 * @property {Object} ngModel Beneficiary object
 * @property {function} onButtonClick Handler for button clicks
 */
const component = {
  bindings: {
    allowCreate: '<',
    debitAccount: '<',
    accounts: '<',
    messages: '<',
    ngModel: '<',
    onButtonClick: '&',
  },
  controller: 'controller',
  template: `
    <div 
      class="bbm-beneficiary-select"
      data-ng-class="{
        'bbm-beneficiary-select-has-focus': $ctrl.state.activeField,
        'bbm-beneficiary-select-has-focus-name': $ctrl.state.activeField === 'name',
        'bbm-beneficiary-select-has-focus-identifier': $ctrl.state.activeField === 'identifier'
      }"
      data-role="beneficiary-select">
      <div class="bbm-beneficiary-select-inner">
        <div class="bbm-beneficiary-select-name form-group form-group-md">
          <ui-bbm-textfield-ng
            data-type="text"
            data-name="beneficiary-name"
            data-label="{{ $ctrl.messages.nameLabel }}"
            data-placeholder="{{ $ctrl.messages.namePlaceholder }}"
            data-role="beneficiary-select-name"
            data-ng-model="$ctrl.state.beneficiary.name"
            data-clear-button="true">
          </ui-bbm-textfield-ng>
        </div>
        <div class="bbm-beneficiary-select-identifier form-group form-group-md">
          <ui-bbm-textfield-ng
            data-type="text"
            data-name="beneficiary-identifier"
            data-label="{{ $ctrl.messages.identifierLabel }}"
            data-placeholder="{{ $ctrl.messages.identifierPlaceholder }}"
            data-role="beneficiary-select-identifier"
            data-disabled="$ctrl.isIbanDisabled()"
            data-ng-required="$ctrl.isExternalAccount()"
            data-ng-model="$ctrl.state.beneficiary.identifier"
            data-ng-model-options="{ allowInvalid: true }"
            data-clear-button="true"
            ui-bb-iban>
            <ng-messages
              for="$ctrl.identifierModelCtrl.$error"
              data-ng-show="$ctrl.identifierModelCtrl.$dirty &&
                            $ctrl.identifierModelCtrl.$touched &&
                            $ctrl.identifierModelCtrl.$invalid"
              role="alert">
              <ng-message
                when="uiBbIban"
                data-i18n-key="errors.invalidAccountIBAN">
              </ng-message>
              <ng-message
                when="required"
                data-i18n-key="errors.requiredAccountIBAN">
              </ng-message>
              <ng-message
                when="sameUiBbIban"
                data-i18n-key="errors.sameAccountIBAN">
              </ng-message>
              <ng-message
                when="createBeneficiary"
                data-i18n-key="errors.createBeneficiary">
              </ng-message>
            </ng-messages>
          </ui-bbm-textfield-ng>
        </div>

        <div 
          class="bbm-beneficiary-select-list"          
          data-role="beneficiary-select-list"
          data-ng-if="$ctrl.state.isListOpened">
          <div class="bbm-list">
            <div class="bbm-list-group">
              <ul class="bbm-list-group-items">
                <li
                  class="bbm-list-item"
                  data-role="beneficiary-select-list-item"
                  data-ng-repeat="account in $ctrl.state.suggestions track by $index"
                  data-ng-click="$ctrl.onAccountClick(account)">
                  <div class="bbm-beneficiary-select-account">
                    <h4
                      class="bbm-beneficiary-select-account-name"
                      data-role="beneficiary-select-account-name"
                      data-ng-bind="account.name">
                    </h4>
                    <div
                      class="bbm-beneficiary-select-account-identifier"
                      data-ng-if="account.identifier">
                      <span
                        class="prevent-ios-click"
                        data-role="beneficiary-select-account-identifier"
                        data-ng-bind="account.identifier">
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bbm-beneficiary-select-button">
          <button
            class="btn btn-icon"
            type="button"
            data-role="beneficiary-select-button"
            data-ng-click="$ctrl.onButtonClick()"
            data-ng-hide="$ctrl.isButtonHidden()">
            <span class="bbm-icon bbm-icon-lg bbm-icon-addressbook fa fa-address-book-o"></span>
          </button>
        </div>
      </div>
    </div>
  `,
};

export default component;
