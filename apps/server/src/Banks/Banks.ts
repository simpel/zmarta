import {TBank} from './TBank';

const Banks: TBank[] = [
	{
		name: 'Nordbank',
		interrest: 3.7,
		rules: [
			{
				field: 'amount',
				operator: 'greaterThan',
				value: 10_000,
			},
			{
				field: 'amount',
				operator: 'lessThan',
				value: 6_000_000,
			},
		],
	},
	{
		name: 'Sydnet Bank',
		interrest: 24,
		rules: [
			{
				field: 'amount',
				operator: 'greaterThan',
				value: 100_000,
			},
		],
	},
	{
		name: 'Sparbanken',
		interrest: 4.8,
		rules: [
			{
				field: 'amount',
				operator: 'greaterThan',
				value: 100_000,
			},
			{
				field: 'repaymentYears',
				operator: 'lessThan',
				value: 8,
			},
		],
	},
	{
		name: 'Svenske Bank',
		interrest: 3,
		rules: [
			{
				field: 'repaymentYears',
				operator: 'lessThan',
				value: 8,
			},
			{
				field: 'amount',
				operator: 'lessThan',
				value: 25_000,
			},
		],
	},
];

export default Banks;
