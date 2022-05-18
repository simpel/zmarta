import React from 'react';
import {IRing} from './IRing';

const Ring = ({children, ...props}: IRing) => {
	const classes = `bg-primary-500 leading-none rounded-full w-11 h-11 flex items-center justify-center bg-primary-500 hover:bg-primary-900 outline-0 focus:ring-2 focus:ring-offset-2 focus:ring-primary-700 focus:bg-primary-700`;

	return (
		<button type="button" className={classes} {...props}>
			{children}
		</button>
	);
};

export default Ring;
