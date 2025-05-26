// User-defined types for date adjustments and conversion units

// Represents adjustments to be made to a date, or the difference between two dates
interface Adjustments {
	years: number;
	months: number;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

// Enum for conversion units
enum ConversionUnit {
	Years = 'years',
	Months = 'months',
	Days = 'days',
	Hours = 'hours',
	Minutes = 'minutes',
	Seconds = 'seconds',
}

// Represents the result of a conversion operation
interface ConversionResult {
	value: number;
	unit: ConversionUnit;
	approximate: boolean;
}

// Enum for while parts of the date will be calculated or displayed
enum Mode {
	DateAndTime = 'dateAndTime',
	TimeOnly = 'timeOnly',
	DateOnly = 'dateOnly',
}

export type { Adjustments, ConversionUnit, Mode, ConversionResult };
