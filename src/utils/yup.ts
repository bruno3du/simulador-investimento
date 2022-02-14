/** @format */

import * as yup from 'yup';

export const schema = yup.object().shape({
	aporteInitial: yup.string().min(1).required(),
	prazo: yup.string().min(1).required(),
	ipca: yup.string().min(1).required(),
	aporteMensal: yup.string().min(1).required(),
	rentabilidade: yup.string().min(1).required(),
	cdi: yup
		.string()
		.min(1, 'Numero deve ser maior que Um')
		.required('Campo requerido'),
});
