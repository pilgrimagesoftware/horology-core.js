import { Adjustments } from "./types";

export function compare(date1: Date, date2: Date): Adjustments {
    return {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };
}
