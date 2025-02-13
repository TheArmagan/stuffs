/**
 * @param {number} ms 
 * @param {{years: [string, string?] | null, months: [string, string?] | null, weeks: [string, string?] | null, days: [string, string?] | null, hours: [string, string?] | null, minutes: [string, string?] | null, seconds: [string, string?] | null}?} [formatting] 
 * @returns 
 */
function formatDuration(ms, formatting = {}) {
  if (isNaN(parseInt(ms))) ms = 0;

  const defaultFormatting = {
    years: ["year", "years"],
    months: ["month", "months"],
    weeks: ["week", "weeks"],
    days: ["day", "days"],
    hours: ["hour", "hours"],
    minutes: ["minute", "minutes"],
    seconds: ["second", "seconds"]
  };

  formatting = { ...defaultFormatting, ...formatting };

  const timeUnits = {
    years: 31536000000,
    months: 2628000000,
    weeks: 604800000,
    days: 86400000,
    hours: 3600000,
    minutes: 60000,
    seconds: 1000
  };

  const durationArr = [];

  for (const [unit, value] of Object.entries(timeUnits)) {
    if (formatting[unit]) {
      const amount = Math.floor(ms / value);
      ms %= value;
      if (amount > 0) {
        durationArr.push(`${amount} ${amount === 1 ? formatting[unit][0] : (formatting[unit][1] ?? formatting[unit][0])}`);
      }
    }
  }

  return durationArr.join(", ").trim();
}

module.exports = formatDuration;