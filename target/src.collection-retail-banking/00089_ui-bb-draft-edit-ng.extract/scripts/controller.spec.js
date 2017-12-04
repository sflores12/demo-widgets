import Controller from './controller';

const createModel = (createDraft, sendDraft) => ({
  createDraft: () => Promise.resolve(createDraft),
  sendDraft: () => Promise.resolve(sendDraft),
});

const noopFn = () => {};

const controller = (onSend = noopFn, onClose = noopFn) => {
  const ctrl = new Controller();
  ctrl.onSend = onSend;
  ctrl.onClose = onClose;
  ctrl.config = {};
  return ctrl;
};

describe('ui-bb-draft-edit-ng::Controller', () => {
  let ctrl, sentDraft;

  beforeEach(() => {
    sentDraft = undefined;
    ctrl = controller((draft) => {
      sentDraft = draft.draft;
      return Promise.resolve(draft);
    });
  });

  const fillData = (subject = "subject", category = "Loans", body = "body") => {
    Object.assign(ctrl.draft, {
      subject,
      category,
      body,
    });
  };

  describe('drafts', () => {
    it('should not send the additions field if it is empty', () => {
      fillData();
      ctrl.send();
      expect(sentDraft.additions).not.toBeDefined();
    });

    it('should send additions', () => {
      fillData();
      const additions = {
        data1: "DATA_1",
        foo: 123,
      };
      ctrl.draft.additions = additions;
      ctrl.send();
      expect(sentDraft.additions).toEqual(additions);
    });
  });
});
