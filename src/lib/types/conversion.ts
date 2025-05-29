
/**
 * Enum for conversion units
 */
enum ConversionUnit {
	Years = 'years',
	Months = 'months',
	Days = 'days',
	Hours = 'hours',
	Minutes = 'minutes',
	Seconds = 'seconds',
}

/**
 * Represents the result of a conversion operation
 */
interface ConversionResult {
	value: number;
	unit: ConversionUnit;
	approximate: boolean;
}

export type { ConversionUnit, ConversionResult };
