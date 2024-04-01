import {Modal} from "bootstrap";

const TurboHelper = class {
    constructor() {
        /* Hide modal when using turbo snapshot (var 1) - Used */
        document.addEventListener('turbo:before-cache', () => {
            this.closeModal();
            this.closeSweetalert();
        })

        // /* Weather widget fix var 1 */
        // document.addEventListener('turbo:before-render', () => {
        //     document.querySelector('#weatherwidget-io-js').remove();
        // });


        /* Weather widget fix var 2 */
        document.addEventListener('turbo:render', () => {
            this.initializeWeatherWidget();
        });
    }

    closeModal() {
        if (document.body.classList.contains('modal-open')) {
            const modalEl = document.querySelector('.modal.show');
            const modal = Modal.getInstance(modalEl);
            modalEl.classList.remove('fade');
            modal._backdrop._config.isAnimated = false;
            modal.hide();
            modal.dispose();
        }

        /* Hide modal when using turbo snapshot (var 2) */
        /*
        const findCacheControlMeta = () => {
            return document.querySelector('meta[name="turbo-cache-control"]');
        }

        document.addEventListener('show.bs.modal', () => {
            if (findCacheControlMeta()) {
                // don't modify existing cache behaviour for snapshot if the meta already exists on the page
                return;
            }

            const meta = document.createElement('meta');
            meta.name = 'turbo-cache-control';
            meta.content = 'no-cache';
            meta.dataset.removable = true;
            document.querySelector('head').appendChild(meta);
        })

        document.addEventListener('hidden.bs.modal', () => {
            const meta = findCacheControlMeta();
            if (!meta || !meta.dataset.removable) {
                return;
            }
            meta.remove();
        })
        */
    }

    closeSweetalert() {
        /**
         * SweetAlert modal + optimization on javascript loaded only on cart page
         * The next line in an internal way to see if sweetalert2 has been imported yet (downloaded and available)
         * And it will be downloaded only on the cart page https://127.0.0.1:8000/cart (because of the "stimulusFetch: 'lazy'" on the submit-confirm_controller.js)
         */
        if (__webpack_modules__[require.resolveWeak('sweetalert2')]) {
            // Because we know it's been imported, this will run synchronously
            import(/* webpackMode: 'weak' */'sweetalert2').then((Swal) => {
                if (Swal.default.isVisible()) {
                    // Gets the element associated with the dialog
                    Swal.default.getPopup().style.animationDuration = '0ms';
                    Swal.default.close();
                }
            })
        }
    }

    initializeWeatherWidget() {
        __weatherwidget_init();
    }
}

export default new TurboHelper();