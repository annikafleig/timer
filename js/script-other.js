'use strict';

// variables

const footerPlaceholder = document.querySelector(`.footer--placeholder`);

// load footer (Datenschutz und Impressum)

const loadFooter = function () {
    footerPlaceholder.insertAdjacentHTML(
        `beforeend`,
        /*HTML*/
        `<div>
            <button class="btn a--color-plain btn--footer">
                <a href="./index.html" class="footer--timer">Timer</a>
            </button>
        </div>
        <div class="footer--nav-name">
            <nav class="footer--nav">
                <a href="./datenschutz.html" class="footer--nav-a a--color-plain">Datenschutz</a>
                <a href="./impressum.html" class="footer--nav-a a--color-plain">Impressum</a>
            </nav>
            <div class="footer--name">AHF</div>
        </div>`
    );
};
loadFooter();
