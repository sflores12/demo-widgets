export default function controller() {
  const $ctrl = this;

  function $onInit() {
  }

  function isLoading() {
    return ($ctrl.messages == null || $ctrl.messages.length === 0)
       && $ctrl.topics == null;
  }

  function getTopicTitle() {
    const category = ($ctrl.conversation || {}).category;
    return (($ctrl.topics || [])
      .find(topic => topic.code === category) || {})
      .name || category;
  }

  function close() {
    $ctrl.onClose();
  }

  function sendReply(draft) {
    return $ctrl.onReplySend({
      conversationId: $ctrl.conversation.id,
      draft: Object.assign({}, draft),
    });
  }

  Object.assign(this, {
    $onInit,
    isLoading,
    getTopicTitle,
    close,
    sendReply,
  });
}
