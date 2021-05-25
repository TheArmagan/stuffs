/**
 * @param {number} part 
 * @param {number} total 
 * @param {number?} maxVal 
 * @param {number?} nanVal 
 * @returns 
 */
module.exports = function percent(part = 1, total = 100, maxVal = 100, nanVal = 0) {
  let val = (part / total) * maxVal;
  return isNaN(val) ? nanVal : val;
}