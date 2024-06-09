module.exports = function cronMinutesTrigger(minuteMarks, callback) {
  function triggerFunction() {
    const now = new Date();
    const currentMinutes = now.getMinutes();

    if (minuteMarks.includes(currentMinutes)) {
      callback();
    }
  }

  function calculateInitialDelay() {
    const now = new Date();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    let nextMark = minuteMarks.find(mark => mark > minutes);
    if (nextMark === undefined) {
      nextMark = minuteMarks[0] + 60; 
    }

    const remainingMinutes = nextMark - minutes;
    const remainingMilliseconds = ((remainingMinutes * 60) - seconds) * 1000 - milliseconds;

    return remainingMilliseconds;
  }

  function startTrigger() {
    const initialDelay = calculateInitialDelay();

    setTimeout(() => {
      triggerFunction(); 

      setInterval(triggerFunction, 60 * 1000);
    }, initialDelay);
  }

  startTrigger();
}