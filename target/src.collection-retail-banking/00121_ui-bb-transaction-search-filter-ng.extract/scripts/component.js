const uiBbTransactionSearchFilterComponent = {
  controller: 'uiBbTransactionSearchFilterController',
  bindings: {
    onFilter: '&',
    buttonLabels: '<',
    fieldLabels: '<',
    onClearFilter: '=',
    currencies: '<',
  },
  template: `
    <div class="panel panel-flat">
      <div class="panel-heading">
        <div class="input-group">
          <ui-bb-search-box-ng
            class="pull-left"
            data-config="{
              hideButton: false,
              showIcon: false,
              labels: {
                title: $ctrl.fieldLabels.search,
                placeholder: $ctrl.fieldLabels.search,
                clear: $ctrl.fieldLabels.clearSearch,
                submit: $ctrl.fieldLabels.submitSearch,
              }
            }"
            data-ng-model="$ctrl.filterParams.query"
            data-on-submit="$ctrl.onApplyFilter(searchFilterForm)"
            data-on-clear="$ctrl.onApplyFilter(searchFilterForm)">
          </ui-bb-search-box-ng>
          <button
            type="button"
            data-ng-class="{ 'active' : $ctrl.state.isFilterOpen }"
            class="btn btn-default btn-filter pull-left"
            data-role="filter"
            data-ng-click="$ctrl.toggleFilter()"
            title="{{ $ctrl.buttonLabels.main}}">
            <i class="fa fa-filter" aria-hidden="true"></i>
            {{ $ctrl.buttonLabels.main }}
          </button>
        </div>
      </div>
      
      <form data-role="search"
        name="searchFilterForm"
        data-ng-submit="$ctrl.onApplyFilter(searchFilterForm)"
        data-ui-bb-track-changes="$ctrl.filterParams">
        
        <div data-ng-show="$ctrl.state.isFilterOpen">
          <div class="panel-body panel-body-dark">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label data-role="credit-debit-indicator-label">
                    {{ $ctrl.fieldLabels.transaction }}
                  </label>
                  <div>
                    <select class="form-control"
                      data-ng-model="$ctrl.filterParams.creditDebitIndicator.value"
                      data-role="select-debit-credit">
                      <option value="" disabled>{{ $ctrl.fieldLabels.select }}</option>
                      <option data-role="credit"
                        value="{{ $ctrl.filterParams.creditDebitIndicator.credit }}">
                        {{ $ctrl.fieldLabels.credit }}
                      </option>
                      <option data-role="debit"
                        value="{{ $ctrl.filterParams.creditDebitIndicator.debit }}">
                        {{$ctrl.fieldLabels.debit}}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-6" data-ng-if="$ctrl.currencies">
                <div class="form-group">
                  <label data-role="currency-label">{{ $ctrl.fieldLabels.currency }}</label>
                  <div>
                    <select class="form-control"
                      data-ng-model="$ctrl.filterParams.currency"
                      data-role="select-currency">
                      <option" value="" disabled>{{ $ctrl.fieldLabels.select }}</option>
                      <option
                        data-ng-repeat="currency in $ctrl.currencies"
                        data-role="currency-{{ currency.name }}"
                        value="{{ currency.name }}">
                        {{ currency.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row">
              <div class="col-md-6">
                <label data-role="amount-range-label">{{ $ctrl.fieldLabels.amountRange }}</label>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="number"
                        min="0"
                        class="amount-range-start form-control"
                        data-ng-model="$ctrl.filterParams.amountFrom"
                        data-ng-keypress="$ctrl.validateAmountKeypress($event)"
                        data-ng-paste="$ctrl.validateAmountPaste($event)"
                        placeholder="{{ $ctrl.fieldLabels.amountFrom }}"
                        title="{{ $ctrl.fieldLabels.amountFrom }}"
                        data-role="amount-from"/>
                      </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="number"
                        min="0"
                        class="amount-range-end form-control"
                        data-ng-model="$ctrl.filterParams.amountTo"
                        data-ng-keypress="$ctrl.validateAmountKeypress($event)"
                        data-ng-paste="$ctrl.validateAmountPaste($event)"
                        placeholder="{{ $ctrl.fieldLabels.amountTo }}"
                        title="{{ $ctrl.fieldLabels.amountTo }}"
                        data-role="amount-to"/>
                      </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label data-role="date-range-label">{{ $ctrl.fieldLabels.dateRange }}</label>
                  <ui-bb-calendar-popup
                    class="date-range-start"
                    data-config="$ctrl.calendarPopupConfig"
                    data-date-range="$ctrl.filterParams.dateRange"
                    disabled="false"
                    data-role="from-date">
                  </ui-bb-calendar-popup>
                </div>
              </div>
            </div>
          </div>
          
          <div class="panel-footer panel-footer-darker">
            <div class="row">
              <div class="col-xs-12">
                <div class="hidden-xs text-right">
                  <button 
                    type="button"
                    class="btn btn-link"
                    data-ng-show="searchFilterForm.$dirty"
                    data-ng-click="$ctrl.onClearFilter(searchFilterForm)"
                    title="{{ $ctrl.buttonLabels.clearAll }}"
                    data-role="clear-all">
                    {{ $ctrl.buttonLabels.clearAll }}
                  </button>
                  <button
                    type="button" 
                    class="btn btn-default"
                    data-ng-click="$ctrl.toggleFilter()"
                    title="{{ $ctrl.buttonLabels.closePanel }}"
                    data-role="cancel">
                    {{ $ctrl.buttonLabels.closePanel }}
                  </button>
                  <button
                    data-ng-disabled="$ctrl.isFormValid(searchFilterForm)"
                    class="btn btn-primary"
                    title="{{ $ctrl.buttonLabels.apply }}"
                    data-ng-click="$ctrl.toggleFilter()"
                    data-role="apply">
                    {{ $ctrl.buttonLabels.apply }}
                  </button>
                </div>
                <div class="visible-xs">
                  <button
                    data-ng-disabled="$ctrl.isFormValid(searchFilterForm)"
                    class="btn btn-primary btn-block"
                    title="{{ $ctrl.buttonLabels.apply }}"
                    data-ng-click="$ctrl.toggleFilter()"
                    data-role="apply">
                    {{ $ctrl.buttonLabels.apply }}
                  </button>
                  <button
                    type="button" 
                    class="btn btn-default btn-block"
                    data-ng-click="$ctrl.toggleFilter()"
                    title="{{ $ctrl.buttonLabels.closePanel }}"
                    data-role="cancel">
                    {{ $ctrl.buttonLabels.closePanel }}
                  </button>
                  <button 
                    type="button"
                    class="btn btn-link btn-block"
                    data-ng-show="searchFilterForm.$dirty"
                    data-ng-click="$ctrl.onClearFilter(searchFilterForm)"
                    title="{{ $ctrl.buttonLabels.clearAll }}"
                    data-role="clear-all">
                    {{ $ctrl.buttonLabels.clearAll }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  `,
};

export default uiBbTransactionSearchFilterComponent;
