import type { Adjustments } from './types';

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
