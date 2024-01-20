export = formatDuration;
/**
 * @param {number} ms
 * @param {{years: [string, string?], months: [string, string?], weeks: [string, string?], days: [string, string?], hours: [string, string?], minutes: [string, string?], seconds: [string, string?]}?} [formatting]
 * @returns
 */
declare function formatDuration(ms: number, formatting?: {
    years: [string, string?];
    months: [string, string?];
    weeks: [string, string?];
    days: [string, string?];
    hours: [string, string?];
    minutes: [string, string?];
    seconds: [string, string?];
}): string;
