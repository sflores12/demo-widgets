const template = `
    <nav
      data-ng-hide="+itemsPerPage >= +totalItems"
      class="bb-pagination text-center"
      aria-label="{{ pageNavigationText }}">
      <ul uib-pagination
        data-boundary-link-numbers="true"
        data-boundary-links="true"
        data-first-text="{{ firstText }}"
        data-last-text="{{ lastText }}"
        data-next-text="{{ nextText }}"
        data-previous-text="{{ previousText }}"

        data-total-items="totalItems"
        data-items-per-page="itemsPerPage"
        data-max-size="maxNavPages"
        data-ng-model="ngModel"
        data-ng-disabled="ngDisabled"
        data-ng-change="$ctrl.pageChanged()"
        data-template-url="pagination.tpl.html">
      </ul>
      <script id="pagination.tpl.html" type="text/ng-template">
        <ul class="pagination">
          <li
            data-ng-if="boundaryLinks"
            data-ng-class="{disabled: noPrevious() || ngDisabled}">
            <a href
              data-ng-click="selectPage(1)"
              data-role="first-page"
              title="{{ firstText }}"
              ><span class="fa fa-angle-double-left fa-lg" aria-hidden="true"></span></a>
          </li>
          <li
            data-ng-if="directionLinks"
            data-ng-class="{disabled: noPrevious() || ngDisabled}">
            <a href
              data-ng-click="selectPage(page - 1)"
              data-role="previous-page"
              title="{{ previousText }}"
              ><span class="fa fa-angle-left fa-lg" aria-hidden="true"></span></a>
          </li>
          <li
            data-ng-repeat="page in pages track by $index"
            data-ng-class="{
              active : page.active,
              'page-range' : page.text == '...',
              disabled : page.text == '...' || ngDisabled
            }">
            <a href
              data-ng-click="page.text == '...' || selectPage(page.number)"
              data-role="paginator-page-{{page.text}}">{{page.text}}</a>
          </li>
          <li
            data-ng-if="directionLinks"
            data-ng-class="{disabled: noNext() || ngDisabled}">
            <a href
              data-ng-click="selectPage(page + 1)"
              data-role="next-page"
              title="{{ nextText }}"
              ><span class="fa fa-angle-right fa-lg" aria-hidden="true"></span></a>
          </li>
          <li
            data-ng-if="boundaryLinks"
            data-ng-class="{disabled: noNext() || ngDisabled}">
            <a href
              data-ng-click="selectPage(totalPages)"
              data-role="last-page"
              title="{{ lastText }}"
              ><span class="fa fa-angle-double-right fa-lg" aria-hidden="true"></span></a>
          </li>
        </ul>
      </script>
    </nav>
  `;


export default function uiBbPaginatorDirective() {
  return {
    controllerAs: '$ctrl',
    controller: 'uiBbPaginatorControllerNg',
    scope: {
      pageNavigationText: '@',
      firstText: '@',
      lastText: '@',
      nextText: '@',
      previousText: '@',

      totalItems: '@',
      itemsPerPage: '@',
      maxNavPages: '@',
      ngModel: '@currentPage',
      ngDisabled: '=',

      changePage: '&',
    },
    template,
  };
}
