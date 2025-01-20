'use strict';

// variables

const body = document.querySelector(`body`);
const input = document.querySelector(`input`);
const labelTimer = document.querySelector(`.timer`);
const btnStartTimer = document.querySelector(`.btn--start-timer`);
const btnChangeMode = document.querySelector(`.btn--change-mode`);

let timer;

// timer

const startTimer = function () {
  // set time to user input and convert to seconds
  let time = +input.value * 60;

  if (time > 0) {
    const tick = function () {
      const min = String(Math.trunc(time / 60)).padStart(2, 0);
      const sec = String(time % 60).padStart(2, 0);

      // in each call print the remaining time to the UI
      labelTimer.textContent = `${min}:${sec}`;

      // when 0 seconds, stop the timer and print time's up to the UI
      if (time === 0) {
        clearInterval(timer);
      }

      // decrease 1s
      time--;
    };

    // call the timer functionality immediately
    tick();
    // call the timer every second
    timer = setInterval(tick, 1000);
    return timer;
  } else {
    alert(`Bitte positive Zahl eingeben`);
  }
};

btnStartTimer.addEventListener(`click`, function () {
  // clear existing timer if necessary
  if (timer) clearInterval(timer);
  timer = startTimer();
  input.value = ``;
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
