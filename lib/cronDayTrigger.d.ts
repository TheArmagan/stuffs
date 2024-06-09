/**
 * @param dayMarks Sunday - Saturday : 0 - 6
 * @example
 * const dayMarks = [0, 3, 5]; // Example: Trigger on Sunday (0), Wednesday (3), and Friday (5)
 * cronDayTrigger(dayMarks, () => {
 *   console.log('Triggered at', new Date().toLocaleString());
 *   // Place your code here
 * });
 */
declare function _exports(dayMarks: number[], callback: () => void | Promise<void>): void;
export = _exports;
