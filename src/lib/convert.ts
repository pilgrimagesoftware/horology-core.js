import type { ConversionResult, ConversionUnit } from './types';

/**
 * Converts a value from one unit to another.
 * @param value The value to convert.
 * @param fromUnit The unit to convert from.
 * @param toUnit The unit to convert to.
 * @returns The converted value and its unit.
 */
export function convert(value: number, fromUnit: ConversionUnit, toUnit: ConversionUnit): ConversionResult {
    // TODO
    return {
        value: 0,
        unit: toUnit,
        approximate: false
    };
}
