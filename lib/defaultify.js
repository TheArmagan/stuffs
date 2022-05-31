/**
 * @param {object} data 
 * @param {object} defaultData 
 * @param {boolean} [recursive=true] 
 * @returns {object}
 */
module.exports = function defaultify(data, defaultData, recursive=true) {
  let newData = Array.isArray(data) ? [...data] : {...data};
  Object.entries(defaultData).forEach(([defKey, defValue]) => {
    newData[defKey] = data[defKey] ?? defValue;
    if (recursive && typeof newData[defKey] == "object") newData[defKey] = defaultify(newData[defKey], defValue)
  });
  return newData;
}