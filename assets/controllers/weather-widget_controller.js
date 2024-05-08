import { Controller } from 'stimulus';

export default class extends Controller {

    connect() {
        // If init function exists call it
        if(typeof __weatherwidget_init === 'function') {
            /* weather/index.html.twig - function inside the https://weatherwidget.io/js/widget.min.js script */
            __weatherwidget_init();
        } // else add the script tag to the id element
        else {
            this.initializeScriptTag(document, 'script', 'weatherwidget-io-js');
        }
    }

    initializeScriptTag(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (!d.getElementById(id)) {
            // creates script element with id "weatherwidget-io-js"
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://weatherwidget.io/js/widget.min.js';
            // add the created script element before the other already existing ones
            fjs.parentNode.insertBefore(js, fjs);
        }
    };
}
