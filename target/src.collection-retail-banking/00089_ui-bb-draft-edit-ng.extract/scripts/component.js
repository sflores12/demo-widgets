import controller from './controller';

/**
 * @name uiBbDraftEditNg
 * @type {Object}
 * @property {Array<Topic>} list of topics
 * @property {UiBbDraftEditNgConfig} config config object
 * @property {Function} onClose function to call when user closes component
 * @property {Function} onSend function to call to send the draft
 * @property {UiBbDraftEditNgMessages} messages object containing localized labels
 *
 * @example
 *  <ui-bb-draft-edit-ng
 *    data-topics="$ctrl.topics"
 *    data-config="$draftCtrl.config"
 *    data-on-close="$draftCtrl.dismiss()"
 *    data-on-send="$draftCtrl.send(draft)"
 *    data-messages="{
 *      labelClose: ('ui-bb-draft-ng.label.close' | i18n),
 *      labelSend: ('ui-bb-draft-ng.label.send' | i18n),
 *      labelRemove: ('ui-bb-draft-ng.label.remove' | i18n),
 *      labelToggleImportance: ('ui-bb-draft-ng.label.toggleImportance' | i18n),
 *      formHeader: ('ui-bb-draft-ng.form.header' | i18n),
 *      formSubject: ('ui-bb-draft-ng.form.subject' | i18n),
 *      formTopic: ('ui-bb-draft-ng.form.topic' | i18n),
 *      formMessage: ('ui-bb-draft-ng.form.message' | i18n),
 *      formSend: ('ui-bb-draft-ng.form.send' | i18n),
 *      errorSend: ('ui-bb-draft-ng.error.send' | i18n),
 *    }"></ui-bb-draft-edit-ng>
 */
const component = {
  bindings: {
    topics: '<',
    config: '<',
    onClose: '&',
    onSend: '&',
    messages: '<',
  },
  controller,
  template: `
    <div class="panel panel-default">
      <div class="panel-body">
        <button type="button" class="close"
          aria-label="{{ $ctrl.messages.labelClose }}" data-ng-click="$ctrl.close()">
          <span aria-hidden="true">&times;</span>
        </button>
        <h3>{{ $ctrl.messages.formHeader }}</h3>
        <form name="newMessageForm">
          <div class="form-inline">
            <div class="form-group" data-ng-if="$ctrl.config.subjectMaxLength > 0">
              <label>{{ $ctrl.messages.formSubject }}:</label>
              <input type="text" class="form-control" data-ng-model="$ctrl.draft.subject"
                required maxlength="{{$ctrl.config.subjectMaxLength}}"/>
            </div>
            <div class="form-group">
              <label>{{ $ctrl.messages.formTopic }}:</label>
              <select class="form-control" data-ng-model="$ctrl.draft.category"
                data-ng-options="key.code as key.name for key in $ctrl.topics track by key.id"
                required>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>{{ $ctrl.messages.formMessage }}:</label>
            <ui-bb-rich-text-editor-ng
              class="form-control"
              data-ng-model="$ctrl.draft.body">
            </ui-bb-rich-text-editor-ng>
          </div>
          <div class="bg-danger" data-ng-show="$ctrl.sendMessageError">
            <p>{{ $ctrl.messages.errorSend }}</p>
          </div>
          <div class="pull-right">
            <button type="submit" class="pull-left btn btn-primary"
              data-ng-click="$ctrl.send()"
              data-ng-disabled="!newMessageForm.$valid"
              aria-label="{{ $ctrl.messages.labelSend }}">
              {{ $ctrl.messages.formSend }}
            </button>
          </div>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default" data-ng-click="$ctrl.close()"
              aria-label="{{ $ctrl.messages.labelClose }}">
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
            <button type="button" class="btn btn-default" data-ng-click="$ctrl.close()"
              aria-label="{{ $ctrl.messages.labelRemove }}">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
            <button type="button" class="btn btn-default"
              data-ng-click="$ctrl.draft.important = !$ctrl.draft.important"
              aria-label="{{ $ctrl.messages.labelToggleImportance }}">
              <i ng-class="{'fa-star-o': !$ctrl.draft.important,
                'fa-star active': $ctrl.draft.important}" class="fa"
                aria-hidden="true"></i>
            </button>
          </div>
        </form>
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

/**
 * @typedef {Object} UiBbDraftEditNgConfig
 * @property {number} subjectMaxLength Max allowed length for new draft subject.
 */

/**
 * @typedef {Object} UiBbDraftEditNgMessages
 * @property {string} formHeader text for form heading
 * @property {string} formTopic label for topic/category/recipient field
 * @property {string} formSubject label for subject field
 * @property {string} formMessage label for message body text area
 * @property {string} formSend label for send button
 * @property {string} errorSend error to be shown if draft sending fails
 */
