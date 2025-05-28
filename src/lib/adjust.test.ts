import { describe, it, expect } from 'vitest';
import { adjust } from './adjust';
import type { Adjustments } from './types';

describe('adjust', () => {
  it('should adjust the date by the given adjustments', () => {
    const date = new Date('2020-01-01T00:00:00Z');
    const adjustments: Adjustments = { years: 1, months: 2, days: 3, hours: 4, minutes: 5, seconds: 6 };
    const adjustedDate = adjust(date, adjustments);
    expect(adjustedDate.getFullYear()).toEqual(2021);
    expect(adjustedDate.getMonth()).toEqual(2);
    expect(adjustedDate.getDate()).toEqual(4);
    expect(adjustedDate.getHours()).toEqual(4);
    expect(adjustedDate.getMinutes()).toEqual(5);
    expect(adjustedDate.getSeconds()).toEqual(6);
  });
});
