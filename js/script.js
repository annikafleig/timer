'use strict';

// variables

const body = document.querySelector(`body`);

const btnStartTimer = document.querySelector(`.btn--start-timer`);
const btnChangeMode = document.querySelector(`.btn--change-mode`);

// timer

btnStartTimer.addEventListener(`click`, function () {
  console.log(`Start timer`);
});

// change mode (light / dark)

btnChangeMode.addEventListener(`click`, function () {
  body.classList.toggle(`body--color-lm`);
  body.classList.toggle(`body--color-dm`);
  btnStartTimer.classList.toggle(`button--color-lm`);
  btnStartTimer.classList.toggle(`button--color-dm`);
  btnChangeMode.classList.toggle(`button--color-lm`);
  btnChangeMode.classList.toggle(`button--color-dm`);

  btnChangeMode.textContent = `${
    body.classList.contains(`body--color-lm`) ? `Dunkler` : `Heller`
  } Modus`;
});
