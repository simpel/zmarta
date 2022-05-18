export type TRule = {
	field: 'amount' | 'repaymentYears';
	operator: 'greaterThan' | 'lessThan';
	value: number;
};

export type TBank = {
	name: string;
	rules: TRule[];
};
