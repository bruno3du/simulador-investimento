/** @format */

import { FormLabel } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';
import NumberFormat from 'react-number-format';
import { InputStyled } from '../style';

interface InputsComponentsProps {
	error?: boolean | "" | undefined;
	labelContent?: string;
	value: string;
	onChange: (e: React.ChangeEvent<any>) => void;
	onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
	id: string | undefined;
	name: string | undefined;
	type?: (('text' | 'tel' | 'password') & HTMLInputTypeAttribute) | undefined;
}

export default function InputPorcent({
	value,
	labelContent,
	onChange,
	id,
	name,
	type,
	onBlur,
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
				id={id}
				name={name}
				type={type}
				className={error ? 'error' : ''}
				thousandsGroupStyle='thousand'
				value={value}
				suffix='%'
				decimalSeparator=','
				thousandSeparator='.'
				displayType='input'
				allowNegative={false}
				onChange={onChange}
				fixedDecimalScale={true}
				onBlur={onBlur}
			/>
			{error && <div>{error}</div>}
		</InputStyled>
	);
}
