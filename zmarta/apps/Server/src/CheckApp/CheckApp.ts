import {TCheckApp} from './TCheckApp';
/**
 * @param {object} applicationData
 * @param {TLender[]} lenders - An array with lenders and their rules
 * @return {TLender[]} - The filtered array
 */

const CheckApp = ({applicationData, lenders}: TCheckApp) => {
	const filteredLenders = lenders.filter((lender) => {
		const {rules} = lender;

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

	return filteredLenders;
};

export default CheckApp;
