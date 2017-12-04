const uiBbNotificationsFilterComponent = {
  bindings: {
    onFilter: '&?',
    headerLabels: '<',
    levelLabels: '<',
    statusLabels: '<',
    buttonLabels: '<',
    onClearFilter: '=',
  },
  controller: 'uiBbNotificationsFilterController',
  template: `
    <form data-role="search"
      name="filterForm"
      data-ng-submit="$ctrl.onApplyFilter()"
      data-ui-bb-track-changes="$ctrl.filterParams">
      <div class="clearfix">
        <div class="pull-right">
          <button class="btn btn-default"
            type="button"
            data-ng-click="$ctrl.toggleFilter()"
            title="{{ $ctrl.buttonLabels.main }}">
            <i class="fa fa-sliders" aria-hidden="true"></i>
            <span data-ng-bind="$ctrl.buttonLabels.main"></span>
          </button>
        </div>
      </div>
      <div data-ng-if="$ctrl.isOpen">
        <div class="form-group row">
          <div class="col-md-5">
            <h5 data-ng-bind="$ctrl.headerLabels.date"></h5>
            <div class="row">
              <div class="col-sm-6">
                <ui-bb-calendar-popup data-config="$ctrl.fromDate.config"
                  data-date="$ctrl.filterParams.fromDate"
                  data-disabled="false">
                </ui-bb-calendar-popup>
              </div>
              <div class="col-sm-6">
                <ui-bb-calendar-popup data-config="$ctrl.toDate.config"
                  data-date="$ctrl.filterParams.toDate"
                  data-disabled="!$ctrl.filterParams.fromDate">
                </ui-bb-calendar-popup>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <h5 data-ng-bind="$ctrl.headerLabels.level"></h5>
          <label class="checkbox-inline"
            data-ng-repeat="level in $ctrl.levels track by $index">
            <input type="checkbox"
              name="{{ $ctrl.levels.name }}"
              data-ng-value="level.value"
              data-ng-model="level.checked"
              data-ng-change="$ctrl.onToggleCheckbox(level, $ctrl.levels)">
            <span data-ng-bind="$ctrl.levelLabels[level.key]"></span>
          </label>
        </div>
        <div class="form-group">
          <h5 data-ng-bind="$ctrl.headerLabels.status"></h5>
          <label class="radio-inline"
            data-ng-repeat="status in $ctrl.statuses track by $index">
            <input type="radio"
              name="{{ $ctrl.statuses.name }}"
              data-ng-model="$ctrl.filterParams.status"
              data-ng-checked="status.checked"
              data-ng-value="status.value">
            <span data-ng-bind="$ctrl.statusLabels[status.key]"></span>
          </label>
        </div>
        <div class="form-group text-right">
          <button class="btn btn-default btn-link"
            type="button"
            data-ng-if="!$ctrl.isFilterPristine(filterForm)"
            data-ng-click="$ctrl.onClearFilter(filterForm)"
            data-ng-bind="$ctrl.buttonLabels.clear">
          </button>
          <button class="btn btn-default"
            type="button"
            data-ng-click="$ctrl.toggleFilter()"
            data-ng-bind="$ctrl.buttonLabels.cancel">
          </button>
          <button class="btn btn-primary"
            type="submit"
            data-ng-bind="$ctrl.buttonLabels.apply">
          </button>
        </div>
      </div>
    </form>
  `,
};

/**
 * @name uiBbNotificationsFilterComponent
 * @type {object}
 */
export default uiBbNotificationsFilterComponent;
