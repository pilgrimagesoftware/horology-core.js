import type { Adjustments } from './types';

/**
 * Adjusts a date by a set of date/time adjustments.
 * @param date The date to adjust.
 * @param adjustments The adjustments to apply.
 * @returns The adjusted date.
 */
export function adjust(date: Date, adjustments: Adjustments) {
  const adjustedDate = new Date();

  adjustedDate.setFullYear(date.getFullYear() + adjustments.years);
  adjustedDate.setMonth(date.getMonth() + adjustments.months);
  adjustedDate.setDate(date.getDate() + adjustments.days);
  adjustedDate.setHours(date.getHours() + adjustments.hours);
  adjustedDate.setMinutes(date.getMinutes() + adjustments.minutes);
  adjustedDate.setSeconds(date.getSeconds() + adjustments.seconds);

  return adjustedDate;
}
