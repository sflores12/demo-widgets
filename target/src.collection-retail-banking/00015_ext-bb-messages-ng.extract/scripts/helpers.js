const ERROR_MAPPING = Object.freeze({
  ERR_SEND_CONVERSATION_REPLY: 'label.error.conversation-reply-failed',
  ERR_REMOVE_CONVERSATION: 'label.error.removed-failed',
});

export default {
  messageFromError: (error) => ERROR_MAPPING[error],
};
