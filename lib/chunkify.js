/** @type {<T extends any[]>(array: T, chunkSize: number) => T[][]} */
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