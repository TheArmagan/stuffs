/**
 * @param {object} data 
 * @param {object} defaultData 
 * @returns {object}
 */
module.exports = function defaultify(data, defaultData) {
  let newData = { ...data };
  Object.entries(defaultData).forEach(([defKey, defValue]) => {
    newData[defKey] = data[defKey] ?? defValue;
  });
  return newData;
}