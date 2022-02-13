/** @format */

import { InputHTMLAttributes } from 'react';
import NumberFormat from 'react-number-format';

interface InputsComponentsProps {
	value: string;
	onChange: (e: React.ChangeEvent<any>) => void;
	inputs: InputHTMLAttributes<InputEvent>;
}

export default function InputsComponents({
	value,
	onChange,
	...inputs
}: InputsComponentsProps) {
	return (
		<NumberFormat
			thousandsGroupStyle='thousand'
			value={value}
			prefix='R$ '
			decimalSeparator='.'
			displayType='input'
			thousandSeparator={true}
			allowNegative={false}
			decimalScale={2}
			isNumericString={true}
			onChange={onChange}
			fixedDecimalScale={true}
			{...inputs}
		/>
	);
}
