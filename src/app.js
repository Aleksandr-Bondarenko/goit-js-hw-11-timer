class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  timer() {
    const time = this.targetDate - new Date();

    const secs = Math.floor((time % (1000 * 60)) / 1000);
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((time % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60));
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const timerField = document.querySelector(this.selector).children;
    const outputFieldsArr = [...timerField].map((el) => {
      return el.querySelector(".value");
    });

    outputFieldsArr[0].textContent = days < 10 ? `0${days}` : days;
    outputFieldsArr[1].textContent = hours < 10 ? `0${hours}` : hours;
    outputFieldsArr[2].textContent = mins < 10 ? `0${mins}` : mins;
    outputFieldsArr[3].textContent = secs < 10 ? `0${secs}` : secs;

    // const secField = document.querySelector('[data-value="secs"]');
    // const minsField = document.querySelector('[data-value="mins"]');
    // const hoursField = document.querySelector('[data-value="hours"]');
    // const daysField = document.querySelector('[data-value="days"]');

    // secField.textContent = secs < 10 ? `0${secs}` : secs;
    // minsField.textContent = mins < 10 ? `0${mins}` : mins;
    // hoursField.textContent = hours < 10 ? `0${hours}` : hours;
    // daysField.textContent = days < 10 ? `0${days}` : days;
  }

  runTimer() {
    const timerEl = document.querySelector(this.selector);
    timerEl.insertAdjacentHTML(
      "beforebegin",
      "<h1 class=timer-title lang = ru>До конца лета осталось:</h1>"
    );

    setInterval(this.timer.bind(this), 1000);
  }
}

const createTimer = new CountdownTimer("#timer-1", new Date("Sep 01, 2021"));

createTimer.runTimer();

// =============================================
// const targetDate = new Date("Sep 01, 2021");

// const outputFieldCall = (units) => {
//   const fieldsValue = document.querySelectorAll(".value");

//   [...fieldsValue].map((field) => {
//     if (
//       field.getAttribute("data-value") === units &&
//       field.classList.contains(`js-${units}`) !== true
//     ) {
//       field.classList.add(`js-${units}`);
//     }
//   });
//   return document.querySelector(`.js-${units}`);
// };

// const timer = () => {
//   const time = targetDate - new Date();

//   const secs = Math.floor((time % (1000 * 60)) / 1000);
//   console.log(time);

//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

//   const hours = Math.floor((time % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60));

//   const days = Math.floor(time / (1000 * 60 * 60 * 24));

//   const secField = outputFieldCall("secs");
//   const minsField = outputFieldCall("mins");
//   const hoursField = outputFieldCall("hours");
//   const daysField = outputFieldCall("days");

//   secField.textContent = secs < 10 ? `0${secs}` : secs;
//   minsField.textContent = mins < 10 ? `0${mins}` : mins;
//   hoursField.textContent = hours < 10 ? `0${hours}` : hours;
//   daysField.textContent = days < 10 ? `0${days}` : days;
// };

// const runTimer = () => {
//   setInterval(timer, 1000);
// };

// runTimer(targetDate);
// =============================================
