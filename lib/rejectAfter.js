/**
 * @param {Number} ms
 */
module.exports = function rejectAfter(ms, reason = "") {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(reason);
    }, ms);
  });
};
