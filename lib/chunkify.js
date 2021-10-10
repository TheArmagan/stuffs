/**
 * Chunkifies the array 
 * @param {any[]} array Array that needs to be chunked!
 * @param {number} chunkSize Chunk size
 * @returns {any[][]} Chunked array.
 */
module.exports = function chunkify(array, chunkSize) {
  if (!array || !chunkSize) return array;

  let length = array.length;
  let slicePoint = 0;
  let result = [];

  while (slicePoint < length) {
    result.push(array.slice(slicePoint, slicePoint + chunkSize))
    slicePoint += chunkSize;
  }
  return result;
}