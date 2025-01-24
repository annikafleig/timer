'use strict';

// variables

const footerPlaceholder = document.querySelector(`.footer--placeholder`);

// load footer (Datenschutz und Impressum)

const loadFooter = function () {
  footerPlaceholder.innerHTML = `<div>
  <button class="button a--color-plain">
    <a href="./index.html" class="footer--timer">Timer</a>
  </button>
</div>
<div class="footer--nav-name">
  <nav class="footer--nav">
    <a href="./datenschutz.html" class="footer--nav-a a--color-plain"
      >Datenschutz</a
    >
    <a href="./impressum.html" class="footer--nav-a a--color-plain"
      >Impressum</a
    >
  </nav>
  <div class="footer--name">AHF</div>
</div>`;
};
loadFooter();
