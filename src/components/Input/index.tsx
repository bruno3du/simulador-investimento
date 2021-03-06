/** @format */

import { FormLabel } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';
import NumberFormat from 'react-number-format';
import { InputStyled } from './style';

interface InputsComponentsProps {
	error?: boolean | '' | undefined;
	labelContent?: string;
	value: string;
	onChange: (e: React.ChangeEvent<any>) => void;
	id: string | undefined;
	name: string | undefined;
	onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
	type?: (('text' | 'tel' | 'password') & HTMLInputTypeAttribute) | undefined;
}

export default function InputPorcent({
	value,
	labelContent,
	onChange,
	id,
	name,
	onBlur,
	type,
	error = false,
}: InputsComponentsProps) {
	return (
		<InputStyled>
			<FormLabel
				sx={error ? { color: 'var(--red)' } : { color: 'var(--black)' }}
				htmlFor={name}>
				{labelContent}
			</FormLabel>
			<NumberFormat
				className={error ? 'error' : ''}
				id={id}
				name={name}
				type={type}
				thousandsGroupStyle='thousand'
				value={value}
				displayType='input'
				allowNegative={false}
				onChange={onChange}
				onBlur={onBlur}
			/>
			{error && <div>{error}</div>}
		</InputStyled>
	);
}
