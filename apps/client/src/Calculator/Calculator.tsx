import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Input from '../Input/Input';
import {
	between,
	convertToCurrency,
	convertToYears,
	getMonthlyCost,
} from '../Utils/Utils';

const INTEREST = 5.77;

const Calculator = () => {
	const [monthlyCost, setMonthlyCost] = useState<string | number>('-');
	const [amount, setLendingAmount] = useState<number>(250_000);
	const [repaymentYears, setPayBackTime] = useState<number>(14);
	const navigator = useNavigate();

	useEffect(() => {
		setMonthlyCost(
			convertToCurrency(getMonthlyCost(amount, repaymentYears, INTEREST)),
		);
	}, [amount, repaymentYears]);

	return (
		<div className="w-full max-w-md mx-auto">
			<h1>Månadskostnad</h1>
			<p className="text-2xl italic font-semibold">{monthlyCost}</p>
			<Input
				title="Lånebelopp"
				value={amount}
				displayValue={convertToCurrency(amount)}
				onDecrease={() => {
					setLendingAmount(between(amount - 5000, 5000, 6_000_000));
				}}
				onIncrease={() => {
					setLendingAmount(between(amount + 5000, 5000, 6_000_000));
				}}
				onChange={(value) => {
					setLendingAmount(between(value, 5000, 6_000_000));
				}}
			/>

			<Input
				title="Återbetalningstid"
				value={repaymentYears}
				displayValue={convertToYears(repaymentYears)}
				onDecrease={() => {
					setPayBackTime(between(repaymentYears - 1, 1, 15));
				}}
				onIncrease={() => {
					setPayBackTime(between(repaymentYears + 1, 1, 15));
				}}
				onChange={(value) => {
					setPayBackTime(between(value, 1, 15));
				}}
			/>
			<button
				type="button"
				onClick={() => {
					navigator(`/erbjudanden/a/${amount}/y/${repaymentYears}`);
				}}
				className="flex items-center justify-between w-full px-6 py-2 text-white rounded-full bg-primary-500 hover:bg-primary-900 outline-0 focus:ring-2 focus:ring-offset-2 focus:ring-primary-700 focus:bg-primary-700"
			>
				<span className="italic">Ansök nu</span>
				<span className="font-sans text-4xl font-thin leading-none">
					&rarr;
				</span>
			</button>
		</div>
	);
};

export default Calculator;
