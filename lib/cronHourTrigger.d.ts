/**
 * @example
 * const hourMarks = [0, 6, 12, 18]; // Example: Trigger at midnight, 6 AM, noon, and 6 PM
 * cronHourTrigger(hourMarks, () => {
 *   console.log('Triggered at', new Date().toLocaleTimeString());
 *   // Place your code here
 * });
 */
declare function _exports(hourMarks: number[], callback: () => void | Promise<void>): void;
export = _exports;
