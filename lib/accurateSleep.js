
/** 
 * Much better for millisecond-level accuracy.
 * @param {number} ms Amount of milliseconds to wait before promise resolve.
 */
module.exports = function accurateSleep(ms) {
  return new Promise((resolve) => {
    let endTime = Date.now() + ms;
    let interval = setInterval(() => {
      if (Date.now() > endTime) {
        resolve();
        clearInterval(interval);
      }
    }, 0);
  });
}