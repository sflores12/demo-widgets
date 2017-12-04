export default function controller() {
  const $ctrl = this;

  function close() {
    $ctrl.onClose();
    $ctrl.draft = {};
  }

  function send() {
    const draft = Object.assign({}, $ctrl.draft);
    draft.category = $ctrl.draft.category;

    $ctrl.onSend({ draft }).then(() => {
      $ctrl.draft = {};
      return;
    });
  }

  Object.assign($ctrl, {
    close,
    send,
    draft: {},
  });
}
