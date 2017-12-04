/**
 * @name gMapSearch
 * @type {function}
 *
 * @description
 * Location search component
 *
 * @return {object}
 * @property {string} placeholder Placeholder text
 */
const directive = () => ({
  restrict: 'E',
  bindings: {
    placeholder: '@',
  },
  template: `
    <label class="show">
      <input type="text" class="form-control g-map-address-search" placeholder="{{placeholder}}" />
    </label>
  `,
  require: ['^^gMapApi', '^?^^gMap', '?^^placeList'],
  link: (scope, el, attr, ctrls) => {
    Object.assign(scope, { placeholder: attr.placeholder });

    const apiCtrl = ctrls[0];
    const gMapCtrl = ctrls[1];
    const placeListCtrl = ctrls[2];
    const searchMethod =
      (gMapCtrl && gMapCtrl.searchMethod) || (placeListCtrl && placeListCtrl.searchMethod);

    apiCtrl.getMapsApi()
      .then((mapsApi) => {
        const autocomplete =
          new mapsApi.places.Autocomplete(el[0].querySelector('.g-map-address-search'));

        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();

          if (place.geometry) {
            searchMethod(place);
          }
        });
      });
  },
});

export default directive;
