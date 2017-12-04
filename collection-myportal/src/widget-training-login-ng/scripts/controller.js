/**
 * @module widget-training-login-ng
 * @name LoginController
 *
 * @description
 * Login
 */
import { E_AUTH, E_CONNECTIVITY } from "lib-bb-model-errors";
const errorMessage = (code) => ({
    [E_AUTH]: "error.load.auth",
    [E_CONNECTIVITY]: "error.load.connectivity",
}[code] || "error.load.unexpected");

export default function LoginController(bus, hooks, bbStorage, widget, model) {
    const $ctrl = this;
    const portal = window.b$ && window.b$.portal;
    // console.log("portal:", portal);
    // Login redirect page
    // console.dir(widget);
    const redirectPage = widget.getStringPreference("loginRedirectPage");
    // console.log("redirectPage:", redirectPage);
    const serverRoot = portal ? portal.config.serverRoot : "";
    const redirectUrl = portal ? `${serverRoot}/${portal.portalName}/${redirectPage}` : redirectPage;
    // console.log("redirectUrl:", redirectUrl);

    $ctrl.data = {
        usuario: "",
        password: "",
    };


    $ctrl.$onInit = () => {
        bus.publish('cxp.item.loaded', {
            id: widget.getId(),
        });

        bus.publish('bb.item.loaded', {
            id: widget.getId(),
        });
    };

    $ctrl.onPostLogin = ($event) => {
        $event.preventDefault();
        const inputsData = {
            user: $ctrl.data.usuario,
            password: $ctrl.data.password
        };
        model
            .postLogin(inputsData)
            // .getLogin()
            .then(response => {
                console.log("response:", response);

                bbStorage.setItem('contact', { data: response }).then(() => {
                    window.location.assign(redirectUrl);

                    bus.publish('spinner', { data: true });

                });


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

    };
}