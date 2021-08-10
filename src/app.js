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

    outputFieldsArr[0].textContent = `${days}`.padStart(2, "0");

    outputFieldsArr[1].textContent = `${hours}`.padStart(2, "0");
    outputFieldsArr[2].textContent = `${mins}`.padStart(2, "0");

    outputFieldsArr[3].textContent = `${secs}`.padStart(2, "0");
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
