/**
 * @example
 * const minuteMarks = [0, 15, 30, 45];
 * cronMinutesTrigger(minuteMarks, () => {
 *   console.log('Triggered at', new Date().toLocaleTimeString());
 *   // Place your code here
 * });
 */
declare function _exports(minuteMarks: number[], callback: () => void | Promise<void>): void;
export = _exports;