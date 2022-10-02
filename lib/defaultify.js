/** @type {<T extends {[k: string]: any}, DT extends {[k: string]: any}>(data: T, defaultData: DT, recursive?: boolean) => T & DT} */
module.exports = function defaultify(data, defaultData, recursive=true) {
  let newData = Array.isArray(data) ? [...data] : {...data};
  Object.entries(defaultData).forEach(([defKey, defValue]) => {
    newData[defKey] = data[defKey] ?? defValue;
    if (recursive && typeof newData[defKey] == "object") newData[defKey] = defaultify(newData[defKey], defValue)
  });
  return newData;
}