import * as hooks from './default-hooks';

describe('widget-bbm-notification-center-ng::default-hooks', () => {
  describe('processNotifications', () => {
    it('should return given notifications', () => {
      const notifications = [{
        "id": "1234-5678-9014",
        "message": "Message shown in future (unless it's past November 2016 :)",
        "level": "WARNING",
        "createdOn": "2016-10-04T11:54:37.777+0000",
        "link": "http://support.dashboard.backbase.com",
        "validFrom": "2016-11-30T23:01:00.000+0000",
        "expiresOn": "2016-11-30T23:01:17.777+0000",
        "read": false,
        "origin": "Maintenance"
      }];

      expect(hooks.processNotifications(notifications)).toEqual([{
        "id": "1234-5678-9014",
        "message": "Message shown in future (unless it's past November 2016 :)",
        "level": "WARNING",
        "createdOn": "2016-10-04T11:54:37.777+0000",
        "link": "http://support.dashboard.backbase.com",
        "validFrom": "2016-11-30T23:01:00.000+0000",
        "expiresOn": "2016-11-30T23:01:17.777+0000",
        "read": false,
        "origin": "Maintenance"
      }]);
    });
  });
});
