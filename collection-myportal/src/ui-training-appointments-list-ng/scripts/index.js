import angular from 'vendor-bb-angular';
// uncomment below to include CSS in your component
// import '../styles/index.css';
import component from './component';

export default angular
  .module('ui-training-appointments-list-ng', [])
  .component('uiTrainingAppointmentsListNg', component)
  .name;
