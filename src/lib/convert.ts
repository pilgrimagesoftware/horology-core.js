import type { ConversionResult, ConversionUnit } from './types';

/**
 * Converts a value from one unit to another.
 * @param value
 * @param fromUnit
 * @param toUnit
 * @returns
 */
export function convert(value: number, fromUnit: ConversionUnit, toUnit: ConversionUnit): ConversionResult {
    // TODO
    return {
        value: 0,
        unit: toUnit,
        approximate: false
    };
}
