import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const { toUpper } = require("lodash");

const inputEl = document.querySelector('#datetime-picker');

const dayEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minEl = document.querySelector('[data-minutes]');
const secEl = document.querySelector('[data-seconds]');

const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

const timerField = document.querySelector('.timer');
timerField.style.display = "flex";
timerField.style.gap = 15 + 'px';

const fieldEl = document.querySelectorAll('.field');
fieldEl.forEach(element => {
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
});

const valueEl = document.querySelectorAll('.value');
valueEl.forEach(element => {
    element.style.fontSize = 35 + 'px';
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
        Notiflix.Notify.failure("Please choose a date in the future");
    } else {
        startBtn.disabled = false;
    }
  },
};

const timer = {
    start() {
        this.timerInterval = setInterval(updateTimer, 1000, Date.parse(inputEl.value));
    },
    timerInterval: null,
}

function renderTime(date) {
    const { days, hours, minutes, seconds } = convertMs(date);
    dayEl.textContent = days.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minEl.textContent = minutes.toString().padStart(2, '0');
    secEl.textContent = seconds.toString().padStart(2, '0');
}

function updateTimer(date) {
    const deltaTime = date - Date.now();
    if (deltaTime <= 0) {
        clearInterval(timer.timerInterval);
        startBtn.disabled = true;
        return
    }
    renderTime(deltaTime);
}

startBtn.addEventListener('click', () => {
    timer.start();
});

flatpickr("#datetime-picker", options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}