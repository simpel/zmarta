import useAxios from 'axios-hooks';
import React, { ReactElement } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { AlertTriangle, Loader, Percentage } from 'tabler-icons-react';
import { convertToCurrency, getMonthlyCost } from '../Utils/Utils';
import { TBank } from './TBank';
const Result = () => {
	const navigator = useNavigate();
	const {amount, repaymentYears} = useParams();
	const [{ data, loading, error }] = useAxios({
		url: "http://localhost:3001/submit",
		data: {amount, repaymentYears},
		method: "POST",
	});

	if (loading) {
		return (
			<div className='text-center'>
				<Loader className='mx-auto mb-4' size={48}/>
				<p className='text-xl font-sharp'>
					Hämtar resultat från våra anslutna banker...
				</p>
			</div>
		)
	}

	if (error) {
		return (
			<div className='text-center text-rose-700 '>
				<AlertTriangle className='mx-auto mb-4' size={48}/>
				<p className='text-xl font-sharp'>
					Tyvärr kunde vi inte ansluta till våra banker för tillfället.
				</p>
			</div>
		)
	}

	const renderBanks = () => {
		const dom: ReactElement<HTMLLIElement>[] = [];
		
		if (data) {
		
		
			data.availableBanks.forEach((bank: TBank, index: number) => {
				
				let cost = getMonthlyCost(Number(amount), Number(repaymentYears), bank.interrest)
			

		
			dom.push(
				<li className='flex items-center justify-between w-full p-4 my-4 border shadow-xl' key={`bank_${index}`}>
					<div>

						<h2 className='text-primary'>{bank.name}</h2>
						<ul className='grid grid-flow-col gap-6 text-sm text-slate-600'>
							<li>Månadskostnad: { convertToCurrency(cost) }</li>
							<li>Ränta: { bank.interrest }%</li>
						</ul>

					</div>
					<a
						href='https://bit.ly/38AMqka'			
						className="flex items-center justify-between w-48 px-6 py-2 text-white rounded-full bg-primary-500 hover:bg-primary-900 outline-0 focus:ring-2 focus:ring-offset-2 focus:ring-primary-700 focus:bg-primary-700"
					>
						<span className="italic">Ansök nu</span>
						<span className="font-sans text-4xl font-thin leading-none">
							&rarr;
						</span>
					</a>
				</li>
			);	
			return bank
		})
	}
		return dom;
	}


	return (
		<div className='container max-w-3xl mx-auto'>
			<h1 className='text-2xl font-extrabold text-center font-sharp'>Grattis! Vi kan erbjuda dig lån hos {data.availableBanks.length} av { data.totalNumOfBanks } banker!</h1>
			<ul className='w-full'>
				{renderBanks()}
			</ul>
			<button
				type='button'
				onClick={() => navigator('/')}
						
						className="flex items-center justify-between w-48 px-6 py-2 mx-auto mt-12 text-white rounded-full bg-slate-500 hover:bg-slate-900 outline-0 focus:ring-2 focus:ring-offset-2 focus:ring-slate-700 focus:bg-slate-700"
					>
						<span className="font-sans text-4xl font-thin leading-none">
							&larr;
						</span>
						<span className="italic">Sök igen</span>
					</button>
		</div>
	);


};

export default Result;
