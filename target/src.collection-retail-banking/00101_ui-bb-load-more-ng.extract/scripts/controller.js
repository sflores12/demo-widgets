/* global document */
export default function controller($timeout) {
  const $ctrl = this;
  let scrollTop;

  $ctrl.loadingMore = false;

  const done = () => {
    $ctrl.loadingMore = false;
    $timeout(() => {
      document.body.scrollTop = scrollTop;
    });
  };

  const onClickLoadMore = () => {
    if ($ctrl.loadingMore) {
      return;
    }
    scrollTop = document.body.scrollTop;
    $ctrl.loadingMore = true;
    $ctrl.onLoadMore({ done });
  };

  Object.assign($ctrl, {
    onClickLoadMore,
    done,
  });
}
