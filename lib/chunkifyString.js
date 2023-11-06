/**
 * @param {string} str 
 * @param {number} maxChunkSize 
 * @param {string?} splitter 
 * @description Splits a string into chunks of a maximum size, last character of each chunk is a splitter character or end of string.
 */
module.exports = function chunkifyString(str, maxChunkSize, splitter) {
  if (!str || !maxChunkSize) return str;

  const length = str.length;
  const result = [];
  let slicePoint = 0;

  while (slicePoint < length) {
    let chunk = str.slice(slicePoint, slicePoint + maxChunkSize);
    let lastChar = chunk[chunk.length - 1];
    if (splitter && lastChar !== splitter) {
      let lastSpace = chunk.lastIndexOf(splitter);
      if (lastSpace === -1) {
        lastSpace = maxChunkSize;
      }
      chunk = chunk.slice(0, lastSpace);
    }
    slicePoint += chunk.length;
    if (chunk[chunk.length - 1] === splitter) {
      chunk = chunk.slice(0, -1);
    }
    result.push(chunk);
  }
  return result;
}