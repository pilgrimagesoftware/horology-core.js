// User-defined types for date adjustments and conversion units

//
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

//
enum Mode {
	DateAndTime = 'dateAndTime',
	TimeOnly = 'timeOnly',
	DateOnly = 'dateOnly',
}

export type { Adjustments, ConversionUnit, Mode };
