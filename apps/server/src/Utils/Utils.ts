import Banks from '../Banks/Banks';
import {TFilterParameters} from './TFilterParameters';

export const filter = (appData: TFilterParameters) => {
	console.log('Checking application...', appData);

	const filteredBanks = Banks.filter((bank) => {
		const {rules} = bank;
		return rules.every((rule) => {
			const {field, operator, value} = rule;

			const fieldValue = appData[field];

			switch (operator) {
				case 'greaterThan':
					return fieldValue > value;
				case 'lessThan':
					return fieldValue < value;
				default:
					return false;
			}
		});
	});

	return filteredBanks.map((bank) => {
		return {
			name: bank.name,
			interrest: bank.interrest,
		};
	});
};
