/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import {Modal} from "bootstrap";

/* Hide modal when using turbo snapshot (var 1) - Used */
document.addEventListener('turbo:before-cache', () => {
    if (document.body.classList.contains('modal-open')) {
        const modalEl = document.querySelector('.modal.show');
        const modal = Modal.getInstance(modalEl);
        modalEl.classList.remove('fade');
        modal._backdrop._config.isAnimated = false;
        modal.hide();
        modal.dispose();
    }
})

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
