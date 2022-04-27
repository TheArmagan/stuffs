let funcNameRegex = /function (.{1,})\(/;
/**
 * @param {any} value 
 * @returns {string}
 */
module.exports = function getValueType(value) {
  let results = (funcNameRegex).exec((value).constructor.toString());
  return (results && results.length > 1) ? results[1] : "";
};