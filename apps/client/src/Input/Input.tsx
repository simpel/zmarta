import React, {FocusEvent, useState} from 'react';
import {Minus, Plus} from 'tabler-icons-react';
import Ring from '../Ring/Ring';
import {TInput} from './TInput';

const Input = ({
	title,
	value,
	displayValue,
	onDecrease,
	onIncrease,
	onChange,
}: TInput) => {
	const [isDirty, setIsDirty] = useState<boolean>(false);
	const [localValue, setLocalValue] = useState<number>(value);
	const classes =
		'p-4 text-gray-700 border border-gray-300 rounded focus:ring-2 focus:ring-offset-2 outline-0 focus:ring-primary-700 focus:bg-gray-50 grow';

	const onFocusEvent = () => {
		setIsDirty(true);
		setLocalValue(value);
	};

	const onBlurEvent = () => {
		setIsDirty(false);
		onChange(localValue);
	};

	const onChangeEvent = (event: FocusEvent<HTMLInputElement>) => {
		if (isDirty) {
			setLocalValue(Number(event.target.value));
		} else {
			onChange(localValue);
		}
	};

	return (
		<section className="my-8">
			<h2 className="font-semibold">{title}</h2>

			<div className="flex items-center gap-4 mt-2">
				<Ring onClick={onDecrease}>
					<Minus strokeWidth="2" size={24} color="white" />
				</Ring>
				<input
					onFocus={onFocusEvent}
					onBlur={onBlurEvent}
					onChange={onChangeEvent}
					value={isDirty ? localValue : displayValue}
					className={classes}
				/>
				<Ring onClick={onIncrease}>
					<Plus strokeWidth="2" size={24} color="white" />
				</Ring>
			</div>
		</section>
	);
};

export default Input;
