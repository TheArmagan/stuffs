export = formatDuration;
/**
 * @param {number} ms milliseconds
 */
declare function formatDuration(ms: number, formatting: { years: [string, string | undefined], months: [string, string | undefined], weeks: [string, string | undefined], days: [string, string | undefined], hours: [string, string | undefined], minutes: [string, string | undefined], seconds: [string, string | undefined] } | undefined): string;
