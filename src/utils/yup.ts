import * as yup from 'yup';

export const schema = yup.object().shape({
  aporteInitial: yup.number().min(1).required(),
  prazo: yup.number().min(1).required(),
  ipca: yup.number().min(1).required(),
  aporteMensal: yup.number().min(1).required(),
  rentabilidade: yup.number().min(1).required(),
  cdi: yup.number().min(1).required(),
});