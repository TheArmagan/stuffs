module.exports = function cronHourTrigger(hourMarks, callback) {
  function triggerFunction() {
    const now = new Date();
    const currentHour = now.getHours();

    if (hourMarks.includes(currentHour)) {
      callback();
    }
  }

  function calculateInitialDelay() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    let nextMark = hourMarks.find(mark => mark > hours);
    if (nextMark === undefined) {
      nextMark = hourMarks[0] + 24; 
    }

    const remainingHours = nextMark - hours;
    const remainingMilliseconds = ((remainingHours * 60 * 60) - (minutes * 60) - seconds) * 1000 - milliseconds;

    return remainingMilliseconds;
  }

  function startTrigger() {
    const initialDelay = calculateInitialDelay();

    setTimeout(() => {
      triggerFunction(); 
      setInterval(triggerFunction, 60 * 60 * 1000);
    }, initialDelay);
  }

  startTrigger();
}