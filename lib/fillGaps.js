/**
 * @param {number[]} arr 
 * @returns {number[]}
 */
function fillGaps(arr) {
  // Written by ErdemGKSL
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return Array((max - min) + 1).fill("").map((_, i) => i + min);
}
module.exports = fillGaps;