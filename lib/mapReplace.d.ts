export = mapReplace;
/**
 * mapReplace("hello world", {"hello": "hey", "world": "guy"}) => "hey guy"
 * @param {string} text
 * @param {object|[any, any][]} map
 * @returns {string}
 */
declare function mapReplace(text: string, map: object | [any, any][]): string;
