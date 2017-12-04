import angular from 'vendor-bb-angular';
// uncomment below to include CSS in your component
// import '../styles/index.css';
import component from './component';

import uibDropdownKey from 'vendor-bb-uib-dropdown';

export default angular
  .module('ui-training-dropdown-ng', [uibDropdownKey])
  .component('uiTrainingDropdownNg', component)
  .name;
