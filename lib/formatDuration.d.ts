export = formatDuration;
/**
 * @param {number} ms 
 * @param {{years: [string, string?] | null, months: [string, string?] | null, weeks: [string, string?] | null, days: [string, string?] | null, hours: [string, string?] | null, minutes: [string, string?] | null, seconds: [string, string?] | null}?} [formatting] 
 * @returns 
 */
declare function formatDuration(ms: number, formatting?: {
    years: [string, string?] | null;
    months: [string, string?] | null;
    weeks: [string, string?] | null;
    days: [string, string?] | null;
    hours: [string, string?] | null;
    minutes: [string, string?] | null;
    seconds: [string, string?] | null;
}): string;
