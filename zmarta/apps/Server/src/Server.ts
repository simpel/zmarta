import path from 'node:path';
import {fileURLToPath} from 'node:url';
import express, {Application} from 'express';
import cors from 'cors';
import {TBank} from './Banks/TBanks';

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
	console.log(request);
	console.log(response);
});

App.get('/submit', async (request, response) => {
	response.json({foo: 'bar'});
});

App.listen(port, () => {
	console.log(`Happiness can be found at http://localhost:${port}`);
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
