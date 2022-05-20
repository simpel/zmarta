import React from 'react';
import {createRoot} from 'react-dom/client';
import '../assets/styles/main.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Calculator from './Calculator/Calculator';
import Result from './Result/Result';

const element = document.querySelector('#root');

if (element) {
	createRoot(element).render(
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<Calculator />} />
					<Route
						path="erbjudanden/a/:amount/y/:repaymentYears"
						element={<Result />}
					/>
				</Routes>
			</BrowserRouter>
		</React.StrictMode>,
	);
} else {
	throw new Error('Root element not found');
}
