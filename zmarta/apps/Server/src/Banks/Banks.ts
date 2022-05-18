import {TBank} from './TBanks';

const Banks: TBank[] = [
	{
		name: 'Nordbank',
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
		rules: [
			{
				field: 'amount',
				operator: 'greaterThan',
				value: 100_000,
			},
		],
	},
	{
		name: 'Svenske Bank',
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
