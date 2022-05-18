import express, {Application} from 'express';
import cors from 'cors';
import { TBank } from './Banks/TBank';
import banks from './Banks/Banks';
import CheckApp from './CheckApp/CheckApp';
import { TCheckApp } from './CheckApp/TCheckApp';
import Banks from './Banks/Banks';

/**
 * Settings
 */

const port = 3001;

const App: Application = express();

App.use(
	cors({
		origin: ['http://localhost:3000'],
	}),
);
App.use(express.json());

App.post('/submit', async (request, response) => {
	const availableBanks = CheckApp({ ...request.body } as TCheckApp);	
	console.log(availableBanks, "ava");
	
	response.json({
		totalNumOfBanks: Banks.length,
		availableBanks,
	});
});


App.listen(port, () => {
	console.log(`🧟 It's alive! http://localhost:${port}`);
});

/**
 * Simulates an API call to bank
 * @param {TBank} bank
 * @return {Promise<>}
 */

const sendToBank = async (bank: TBank) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(`Applied to ${bank.name}`);
			resolve({
				name: bank.name,
				response: `Successfully applied to ${bank.name}`,
			});
		}, 1000);
	});
};
