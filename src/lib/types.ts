
interface Adjustments {
	years: number;
	months: number;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

enum ConversionUnit {
	Years = 'years',
	Months = 'months',
	Days = 'days',
	Hours = 'hours',
	Minutes = 'minutes',
	Seconds = 'seconds',
}

export type { Adjustments, ConversionUnit };
