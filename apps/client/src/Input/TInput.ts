export type TInput = {
	title: string;
	value: number;
	displayValue: string;
	onIncrease: () => void;
	onDecrease: () => void;
	onChange: (value: number) => void;
};
