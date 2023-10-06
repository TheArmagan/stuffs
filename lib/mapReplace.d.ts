export = mapReplace;
/**
 * mapReplace("hello world", {"hello": "hey", "world": "guy"}) => "hey guy"
 * mapReplace({ test: 1, test2: "hello", test3: "world" }, {"hello": "hey", "world": "guy"}, true) => { test: 1, test2: "hey", test3: "guy" }
 * @param {string} text
 * @param {object|[any, any][]} map
 * @param {boolean} [recursive=true]
 * @returns {string}
 */
declare function mapReplace<T extends string | Record<string, any>>(text: T, map: object | [any, any][], recursive?: boolean): T;
