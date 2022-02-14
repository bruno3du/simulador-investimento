/** @format */

import { FormLabel } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';
import NumberFormat from 'react-number-format';
import { InputStyled } from '../style';

interface InputCurrencyProps {
	error?: boolean;
	labelContent?: string;
	value: string;
	onChange: (e: React.ChangeEvent<any>) => void;
	id: string | undefined;
	name: string | undefined;
	type?: (('text' | 'tel' | 'password') & HTMLInputTypeAttribute) | undefined;
}

export default function InputCurrency({
	value,
	labelContent,
	onChange,
	id,
	name,
	type,
	error = false,
}: InputCurrencyProps) {
	return (
		<InputStyled>
			<FormLabel
				sx={error ? { color: 'var(--red)' } : { color: 'var(--black)' }}>
				{labelContent}
			</FormLabel>
			<NumberFormat
				id={id}
				name={name}
				type={type}
				className={error ? 'error' : ''}
				thousandsGroupStyle='thousand'
				value={value}
				prefix='R$ '
				decimalSeparator=','
				thousandSeparator='.'
				displayType='input'
				allowNegative={false}
				decimalScale={2}
				isNumericString={false}
				onChange={onChange}
				fixedDecimalScale={true}
			/>
			{error && <div>error</div>}
		</InputStyled>
	);
}
