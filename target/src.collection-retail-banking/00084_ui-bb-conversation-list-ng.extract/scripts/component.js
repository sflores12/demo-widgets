import controller from './controller';

/**
 * @name uiBbConversationListNg
 * @type {Object}

 * @property {Array<Conversation>} conversations list of conversations to display
 * @property {Array<Topic>} list of topics
 * @property {Function} onSelect function to be called when a conversation is selected
 * @property {Function} onDeselect function to be called when a conversation is deselected
 * @property {Function} onClick function to be called when a conversation is clicked
 */

const component = {
  bindings: {
    conversations: '=',
    topics: '<',
    onSelect: '&',
    onDeselect: '&',
    onClick: '&',
  },
  controller,
  transclude: true,
  template: `
    <div class="list-group conversation-list">
      <div class="conversation list-group-item"
        data-ng-repeat="conversation in $ctrl.conversations track by conversation.id"
        data-ng-hide="conversation.deleteInProgress"
        data-ng-class="{
          unread: conversation.containsUnread,
          active: conversation.selected,
        }"
        data-ng-click="$ctrl.onClick({ conversation: conversation } )">

        <div class="row">
          <div class="col-xs-1">
            <div>
              <input type="checkbox"
                data-ng-model="conversation.selected"
                data-ng-change="$ctrl.onSelectionChange(conversation)"
                data-ng-click="$event.stopPropagation()"/>
            </div>
          </div>
          <div class="col-xs-8 col-sm-6 col-md-7 conversation-info">
            <div class="subject">
              <span class="list-group-item-heading subject">
               {{ conversation.subject }}
              </span>
            </div>
            <div class="sender">
              {{ conversation.sender }}
            </div>
          </div>
          <div class="hidden-xs col-sm-2 category">
            <span class="label label-default" data-ng-class="conversation.category">
              {{ $ctrl.getTopicTitle(conversation.category) }}
            </span>
          </div>
          <div class="col-xs-1 col-sm-1 conversation-icon">
            <i data-ng-if="conversation.numberOfMessages > 1"
              class="fa fa-exchange"
              aria-hidden="true"></i>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-1 date">
            {{ conversation.timestamp | date: 'shortDate' }}
          </div>
        </div>
      </div>
    </div>
  `,
};

export default component;

/**
 * @typedef {Object} Conversation
 * @property {string} id
 * @property {boolean} containsUnread flag indicating whether conversation has unread messages
 * @property {boolean} selected
 * @property {string} subject
 * @property {string} sender name of the conversation sender
 * @property {string} body
 * @property {string} category
 * @property {number} numberOfMessages number of messages in the conversation
 * @property {string} timestamp timestamp of last message in conversation
 */

 /**
  * @typedef {Object} Topic
  * @property {string} id
  * @property {string} code
  * @property {string} name
 */
