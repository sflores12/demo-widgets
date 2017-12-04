import controller from './controller';

/**
 * @name uiBbConversationViewNg
 * @type {object}
 * @description
 * Conversation view directive which can be used to display a list of messages in conversation.
 *
 * @property {object} conversation conversation to show
 * @property {object} messages messages belonging to the conversation.
 * @property {Array<Topic>} list of topics
 * @property {object} draft optional draft object to be displayed in response field
 * @property {function} on-close function to be called when the view is closed
 * @property {function} on-reply-send function to be called to send a response draft
 * @example
 *
 * <ui-bb-conversation-view-ng
 *   data-on-click="$conversationViewCtrl.viewConversation(conversation)"
 *   data-conversation="$conversationViewCtrl.conversation"
 *   data-messages="$conversationViewCtrl.messages"
 *   data-topics="$ctrl.topics"
 *   data-draft="$conversationViewCtrl.draft"
 *   data-on-close="$conversationViewCtrl.close()"
 *   data-on-reply-send="$conversationViewCtrl.sendReply(draft)"
 *   data-labels="{
 *     labelClose: ('ui-bb-conversation-view-ng.label.close' | i18n),
 *     labelSend: ('ui-bb-conversation-view-ng.label.send' | i18n),
 *   }"></ui-bb-conversation-view-ng>
 *
 */
const component = {
  bindings: {
    conversation: '<',
    messages: '<',
    topics: '<',
    draft: '<',
    onClose: '&',
    onReplySend: '&',
    labels: '<',
  },
  controller,
  transclude: true,
  template: `
    <div class="panel panel-default">
      <div class="panel-heading container-fluid">
        <div class="row">
          <div class="col-sm-8 col-xs-5 conversation-info">
            <span class="list-group-item-heading subject">{{ $ctrl.conversation.subject }}</span>
          </div>
          <div class="col-sm-2 col-xs-2 category">
            <span class="label label-default" data-ng-class="{{ $ctrl.conversation.category }}">
              {{ $ctrl.getTopicTitle() }}
            </span>
          </div>
          <div class="col-sm-2 col-xs-5 date text-right">
            {{ $ctrl.conversation.timestamp | date: 'shortDate' }}
          </div>
        </div>
      </div>

      <ul class="list-group" data-ng-if="!$ctrl.isLoading()">
        <li class="list-group-item" data-ng-repeat="$message in $ctrl.messages">
          <b>{{ $message.senderName }}</b><br/>
          <div class="message-header">
            {{ $message.deliveredOn | date: 'shortDate' }}
            <div class="pull-right">
              <i class="fa fa-clock-o" aria-hidden="true"></i>
              {{ $message.deliveredOn | date: 'shortTime' }}
            </div>
          </div>
          <div class="message-body">
            <div data-ng-bind-html="$message.body"></div>
          </div>
        </li>
      </ul>

      <div class="loading-panel text-center" data-ng-if="$ctrl.isLoading()">
        <div class="h4" data-i18n-key="label.message.loading"></div>
      </div>

      <div class="panel-footer" data-ng-if="!$ctrl.isLoading()">
        <form name="replyMessageForm">
          <ui-bb-rich-text-editor-ng
            class="form-control"
            data-ng-model="$ctrl.draft.body">
          </ui-bb-rich-text-editor-ng>
        </form>
        <p>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default" data-ng-click="$ctrl.close()"
              aria-label="{{ $ctrl.labels.labelClose }}">
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
          </div>
          <div class="pull-right">
            <button type="submit" class="pull-left btn btn-primary"
              data-ng-disabled="!replyMessageForm.$valid"
              data-ng-click="$ctrl.sendReply($ctrl.draft)"
              data-i18n-key="label.send"
              aria-label="{{ $ctrl.labels.labelSend }}">
            </button>
          </div>
        </p>
      </div>
    </div>
  `,
};

export default component;

/**
 * @typedef {Object} Topic
 * @property {string} id
 * @property {string} code
 * @property {string} name
 */
