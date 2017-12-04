/**
 * @module widget-training-detalles-ng
 * @name DetallesController
 *
 * @description
 * Detalles
 */


import { E_AUTH, E_CONNECTIVITY } from 'lib-bb-model-errors';

const errorMessage = (code) => ({
    [E_AUTH]: 'error.load.auth',
    [E_CONNECTIVITY]: 'error.load.connectivity',
}[code] || 'error.load.unexpected');

export default function DetallesController(bus, hooks, bbStorage, widget, model) {
    const $ctrl = this;

    const portal = window.b$ && window.b$.portal;
    const redirectPage = widget.getStringPreference("logoutRedirectPage");
    const serverRoot = portal ? portal.config.serverRoot : "";
    const redirectUrl = portal ? `${serverRoot}/${portal.portalName}/${redirectPage}` : redirectPage;

    // widget.features.pubsub.subscribe("notification", function(evt) { 
    // console.log(evt.data); // will print "text to be delivered"
    // });


    bbStorage.getItem('contact').then((value) => {
        // console.dir(value);
        // console.log('contact:' + value);
        $ctrl.dtaContact = [];
        if (value == null) {
            // 	window.location.assign(redirectUrl);
            $ctrl.dtaContact = '';
        } else {
            $ctrl.dtaContact = value.data;
        }
    });


    const $onInit = () => {
        $ctrl.isLoading = true;
        $ctrl.dtaAccounts = [];

        model
            .getDataAccounts()
            .then(response => {
                console.log("response:", response);
                $ctrl.dtaAccounts = response.data;

            })
            .catch(error => {
                $ctrl.error = errorMessage(error.code);
                bus.publish('widget-training-login-ng.load.failed', {
                    error
                });
            })
            .then(() => {
                $ctrl.isLoading = false;
            });

        bus.publish('cxp.item.loaded', {
            id: widget.getId(),
        });

        bus.publish('bb.item.loaded', {
            id: widget.getId(),
        });
    };

    const onSignOut = () => {
        // model
        //   .postLogout()
        //   .then(response => {
        //     console.log("response:", response);

        bbStorage.removeItem('contact');
        window.location.assign(redirectUrl);

        // })
        // .catch(error => {
        //   $ctrl.error = errorMessage(error.code);
        //   bus.publish('widget-training-login-ng.load.failed', {
        //     error
        //   });
        // })
        // .then(() => {
        //   $ctrl.isLoading = false;
        // });

    };
    const onSelectAccounts = (dta) => {
        console.log('onSelectAccounts:' + dta);
        bus.publish('accounts:showDetails', dta);
    };

    Object.assign($ctrl, {
        $onInit,
        onSignOut,
        onSelectAccounts,
        /**
         * @description
         * The value returned from {@link Hooks.processItems} hook.
         * null if the items aren't loaded.
         *
         * @name AppointmentsController#items
         * @type {any}
         */
        // items: null,
        dtaAccounts: null,

        /**
         * @description
         * Loading status
         *
         * @name AppointmentsController#isLoading
         * @type {boolean}
         */
        isLoading: false,

        /**
         * @description
         * The error encountered when attempting to fetch from the model
         *
         * @name AppointmentsController#error
         * @type {ModelError}
         */
        error: null,

    });


}