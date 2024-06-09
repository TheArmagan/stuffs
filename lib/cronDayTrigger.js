module.exports = function cronDayTrigger(dayMarks, callback) {
  function triggerFunction() {
    const now = new Date();
    const currentDay = now.getDay(); 

    if (dayMarks.includes(currentDay)) {
      callback();
    }
  }

  function calculateInitialDelay() {
    const now = new Date();
    const days = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    let nextMark = dayMarks.find(mark => mark > days);
    if (nextMark === undefined) {
      nextMark = dayMarks[0] + 7;
    }

    const remainingDays = nextMark - days;
    const remainingMilliseconds = ((remainingDays * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60) - seconds) * 1000 - milliseconds;

    return remainingMilliseconds;
  }

  function startTrigger() {
    const initialDelay = calculateInitialDelay();

    setTimeout(() => {
      triggerFunction(); 

      setInterval(triggerFunction, 24 * 60 * 60 * 1000);
    }, initialDelay);
  }

  startTrigger();
}