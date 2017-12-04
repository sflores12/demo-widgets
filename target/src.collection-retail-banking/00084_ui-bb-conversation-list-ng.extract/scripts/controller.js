export default function controller() {
  const $ctrl = this;

  function generateProfilePic() {
    return '';
  }

  function getTopicTitle(category) {
    return (($ctrl.topics || [])
      .find(topic => topic.code === category) || {})
      .name || category;
  }

  function onSelectionChange(conversation) {
    if (conversation.selected) {
      $ctrl.onSelect({ conversation });
    } else {
      $ctrl.onDeselect({ conversation });
    }
  }

  Object.assign(this, {
    generateProfilePic,
    getTopicTitle,
    onSelectionChange,
  });
}
