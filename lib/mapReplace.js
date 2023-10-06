/**
 * mapReplace("hello world", {"hello": "hey", "world": "guy"}) => "hey guy"
 * @param {string} text 
 * @param {object|[any, any][]} map 
 * @returns {string}
 */
function replacer(text, map) {
  return (Array.isArray(map) ? map : Object.entries(map)).reduce((all, current) => all.replaceAll(current[0], current[1]), text);
}

function replacerRecursive(objOrText, toReplace) {
  if (typeof objOrText === "string") return replacer(objOrText, toReplace);
  if (Array.isArray(objOrText)) return objOrText.map(i => replacerRecursive(i, toReplace));
  if (typeof objOrText !== "object" || !objOrText) return objOrText;
  const newObj = {};
  for (const [key, value] of Object.entries(objOrText ?? {})) {
    if (typeof value === "string") newObj[key] = replacer(value, toReplace);
    else if (Array.isArray(value)) newObj[key] = value.map(i => replacerRecursive(i, toReplace));
    else if (typeof value === "object") newObj[key] = replacerRecursive(value, toReplace);
    else newObj[key] = value;
  }
  return newObj;
}

function mapReplace(objOrText, toReplace, recursive = true) {
  return recursive ? replacerRecursive(objOrText, toReplace) : replacer(objOrText, toReplace);
}

module.exports = mapReplace;