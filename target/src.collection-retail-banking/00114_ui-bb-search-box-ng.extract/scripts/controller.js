export default function controller(element) {
  const ctrl = this;

  const ngModelCtrl = element.controller('ngModel');
  const input = element.find('input').eq(0);

  const state = {};

  const KeyCodes = {
    ENTER: 13,
  };

  const getSearchValue = () => ({ search: state.value });

  const hasValue = () => Boolean(ctrl.state.value && ctrl.state.value.trim());

  const allowRequest = () => ctrl.state.valueChanged || ctrl.forcedSubmit;

  const setFocus = () => { input[0].focus(); };

  const setValue = () => { ngModelCtrl.$setViewValue(state.value); };

  const submitSearch = () => {
    if (allowRequest()) {
      ctrl.state.valueChanged = false;
      ctrl.onSubmit(getSearchValue());
    }
  };

  const onStateChange = (search) => {
    state.value = search;
    ctrl.onChange(getSearchValue());

    if (state.resetSearch) {
      state.resetSearch = false;
      ctrl.onClear();
      setFocus();
    }
  };

  const clear = () => {
    state.resetSearch = true;
    state.value = null;
    setValue();
  };

  const onKeyup = (event) => {
    if (event.keyCode === KeyCodes.ENTER && allowRequest()) {
      ctrl.state.valueChanged = false;
      ctrl.onSubmit(getSearchValue());
    }
  };

  const $onChanges = ({ ngModel, isLoading }) => {
    if (ngModel && ngModel.currentValue !== ngModel.previousValue) {
      if (!ngModel.isFirstChange()) {
        ctrl.state.valueChanged = true;
      }
      onStateChange(ngModel.currentValue);
    }

    if (isLoading && isLoading.currentValue !== isLoading.previousValue) {
      state.isLoading = isLoading.currentValue;
    }
  };

  Object.assign(ctrl, {
    $onChanges,

    state,
    setValue,
    clear,
    hasValue,
    onKeyup,
    submitSearch,
  });
}
