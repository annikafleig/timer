'use strict';

// variables

const body = document.body;
const inputHours = document.querySelector(`#input--hours`);
const inputMinutes = document.querySelector(`#input--minutes`);
const inputSeconds = document.querySelector(`#input--seconds`);
const labelTimer = document.querySelector(`.timer`);
const btnStartTimer = document.querySelector(`.btn--start-timer`);
const btnChangeMode = document.querySelector(`.btn--change-mode`);
const footer = document.querySelector(`footer`);
const AllFooterNavA = document.querySelectorAll(`.footer--nav-a`);

let timer;

// timer

const startTimer = function () {
    // set time to user input and convert to seconds
    let time =
        +inputHours.value * 60 * 60 +
        +inputMinutes.value * 60 +
        +inputSeconds.value;
    inputHours.value = ``;
    inputMinutes.value = ``;
    inputSeconds.value = ``;

    if (time > 0) {
        const tick = function () {
            const hours = String(Math.trunc(time / (60 * 60))).padStart(2, 0);
            const min = String(Math.trunc((time % (60 * 60)) / 60)).padStart(
                2,
                0
            );
            const sec = String((time % (60 * 60)) % 60).padStart(2, 0);

            // in each call print the remaining time to the UI
            labelTimer.textContent = `${hours}:${min}:${sec}`;

            // time's up (clear timer and show alter window)
            if (time === 0) {
                clearInterval(timer);
                // without setTimeout() the remaining time is only displayed as 00:00:00 AFTER the alert window is closed
                setTimeout(() => {
                    alert(`Die Zeit ist um`);
                }, 100);
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
        alert(`Bitte eine positive Zahl eingeben`);
        labelTimer.textContent = `00:00:00`;
    }
};

btnStartTimer.addEventListener(`click`, function () {
    // clear existing timer if necessary
    if (timer) clearInterval(timer);
    timer = startTimer();
});

document.addEventListener(`keydown`, function (e) {
    if (e.key === `Enter`) {
        if (
            inputHours.value != `` ||
            inputMinutes.value != `` ||
            inputSeconds.value != ``
        ) {
            // clear existing timer if necessary
            if (timer) clearInterval(timer);
            timer = startTimer();
            inputHours.blur();
            inputMinutes.blur();
            inputSeconds.blur();
        }
    }
});

// change mode (light / dark)

btnChangeMode.addEventListener(`click`, function () {
    body.classList.toggle(`body--color-lm`);
    body.classList.toggle(`body--color-dm`);
    btnStartTimer.classList.toggle(`btn--color-lm`);
    btnStartTimer.classList.toggle(`btn--color-dm`);
    btnChangeMode.classList.toggle(`btn--color-lm`);
    btnChangeMode.classList.toggle(`btn--color-dm`);

    btnChangeMode.textContent = `${
        body.classList.contains(`body--color-lm`) ? `Dunkler` : `Heller`
    } Modus`;

    footer.classList.toggle(`footer--color-lm`);
    footer.classList.toggle(`footer--color-dm`);

    AllFooterNavA.forEach((a) => {
        a.classList.toggle(`a--color-lm`);
        a.classList.toggle(`a--color-dm`);
    });
});
