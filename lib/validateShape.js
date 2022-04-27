const getValueType = require("./getValueType");

/**
 * @param {object} data 
 * @param {object} originalData 
 * @param {boolean} [recursive=true]
 * @returns {boolean}
 */
module.exports = function validateShape(data, originalData, recursive=true) {
  let entries = Object.entries(data);
  if (entries.length != Object.keys(originalData).length) return false;
  for (let i = 0; i < entries.length; i++) {
    const [defKey, defValue] = entries[i];
    if (getValueType(defValue) != getValueType(originalData[defKey])) return false;
    if (recursive && typeof defValue == "object") return validateShape(defValue, originalData[defKey]);
  }
  return true;
}