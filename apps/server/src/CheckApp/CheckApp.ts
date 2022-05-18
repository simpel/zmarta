import Banks from '../Banks/Banks';
import {TCheckApp} from './TCheckApp';
/**
 * @param {object} applicationData
 * @param {TLender[]} lenders - An array with lenders and their rules
 * @return {TLender[]} - The filtered array
 */

const CheckApp = (applicationData: TCheckApp) => {
	console.log("Checking application...", applicationData);
	
	const filteredBanks = Banks.filter((bank) => {
		const {rules} = bank;
		return rules.every((rule) => {
			const {field, operator, value} = rule;

			const fieldValue = applicationData[field];
			
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
			interrest: bank.interrest
		}
	});
	
};

export default CheckApp;
