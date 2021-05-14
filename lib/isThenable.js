/**
 * 
 * @param {Promise|Function|any} anything 
 */
module.exports = function isThenable(anything) {
  try {
    return !!anything && typeof anything.then == "function";
  } catch {
    return false;
  }
}