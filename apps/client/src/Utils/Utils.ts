export const convertToCurrency = (value: number) =>
	Intl.NumberFormat('sv-SE', {
		style: 'currency',
		currency: 'SEK',
		maximumFractionDigits: 0,
	}).format(value);

export const convertToYears = (value: number) =>
	Intl.NumberFormat('sv-SE', {
		style: 'unit',
		unit: 'year',
	}).format(value);

export const between = (value: number, min: number, max: number): number => {
	if (value <= min) return min;
	if (value >= max) return max;
	return value;
};

export const getMonthlyCost = (
	loanAmount: number,
	repaymentYears: number,
	interest: number,
) => {
	const months = repaymentYears * 12;
	return Math.round(
		(loanAmount * (interest / 100)) /
			12 /
			(1 - (1 + interest / 100 / 12) ** (months * -1)),
	);
};
