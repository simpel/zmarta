import {HTMLAttributes, ReactNode} from 'react';

export interface IRing extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}
