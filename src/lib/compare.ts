import type { Adjustments } from "./types/adjustment";

/**
 * Compares two dates and returns the difference in years, months, days, hours, minutes, and seconds.
 * @param date1 The first date to compare.
 * @param date2 The second date to compare.
 * @returns An object containing the differences in each time unit.
 */
export function compare(date1: Date, date2: Date): Adjustments {
    const diff: Adjustments = {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    // Calculate the differences
    // TODO

    return diff;
}
