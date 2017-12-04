import plugins from 'lib-bbm-plugins';
import extEvents from './events';

describe('ext-bbm-notification-center-list-ng:events', () => {
    const context = {
        $filter: () => key => key,
    };

    beforeEach(() => {
        const activityIndicator = jasmine.createSpyObj('activityIndicator', ['show', 'hide']);
        const snackbar = jasmine.createSpyObj('snackbar', ['error', 'hide', 'success']);

        activityIndicator.show.and.returnValue(Promise.resolve({}));
        activityIndicator.hide.and.returnValue(Promise.resolve({}));

        snackbar.error.and.returnValue(Promise.resolve({}));

        spyOn(plugins, 'ActivityIndicator').and.returnValue(activityIndicator);
        spyOn(plugins, 'Snackbar').and.returnValue(snackbar);
    });

    describe('bb.event.notification.delete.start', () => {
        it('should hide activity indicator', () => {
            const expectedMessage = 'message.notification.delete.start';
            const events = extEvents(context);

            events['bb.event.notification.delete.start']();

            expect(plugins.ActivityIndicator().show).toHaveBeenCalledWith(expectedMessage);
        });
    });

    describe('bb.event.notification.delete.done', () => {
        it('should hide activity indicator', () => {
            const events = extEvents(context);

            events['bb.event.notification.delete.done']();

            expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
        });

        it('should show success notification', () => {
            const events = extEvents(context);

            events['bb.event.notification.delete.done']();

            expect(plugins.Snackbar().success).toHaveBeenCalled();
        });
    });

    describe('bb.event.notification.delete.failed', () => {
        it('should hide activity indicator', () => {
            const events = extEvents(context);

            events['bb.event.notification.delete.failed']();

            expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
        });

        it('should show error notification', () => {
            const events = extEvents(context);

            events['bb.event.notification.delete.failed']();

            expect(plugins.Snackbar().error).toHaveBeenCalled();
        });
    });
});
