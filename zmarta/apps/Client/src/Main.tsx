import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App/App';

const element = document.querySelector('#root');

if (element) {
	createRoot(element).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
} else {
	throw new Error('Root element not found');
}
