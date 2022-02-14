/** @format */

import { useState } from 'react';
import { Container } from './style';
import { GlobalStyles } from './styles/globalStyles';
import { Button, ButtonGroup } from '@mui/material';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';
import { useFormik } from 'formik';
import InputCurrency from './components/Input/InputsCurrency';
import InputPorcent from './components/Input/InputPorcent';
import Input from './components/Input';
import { schema } from './utils/yup';

const ButtonCSS = {
	border: '1px solid var(--black)',
	color: 'var(--black)',
	padding: '5px 20px',

	'&:hover': {
		border: '1px solid var(--black)',
		background: 'var(--gray-400)',
	},
};

function App() {
	const [formLiqBr, setFormLiqBr] = useState({
		bruto: true,
		liquido: false,
	});
	const [formPrePosFix, setFormPrePosFix] = useState({
		pre: true,
		pos: false,
		fixed: false,
	});

	const formik = useFormik({
		initialValues: {
			aporteInitial: '',
			prazo: '',
			ipca: '',
			aporteMensal: '',
			rentabilidade: '',
			cdi: '',
		},
		validationSchema: schema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	console.log(formik.errors.aporteInitial)
	return (
		<>
			<GlobalStyles />
			<Container>
				<header>
					<h1 style={{ textAlign: 'center' }}>Simulador de Investimento</h1>
				</header>
				<main>
					<section>
						<h2>Simulador</h2>
						<form onSubmit={formik.handleSubmit}>
							<div>
								<div className='form-01'>
									<div className='rendimento--tipo'>
										<div className='rendimento--tipo__title'>
											<span>Rendimento</span>
											<div>
												<AiOutlineExclamationCircle />
											</div>
										</div>
										<ButtonGroup
											sx={{ mt: '10px' }}
											fullWidth
											aria-label='large button group'>
											<Button
												startIcon={formLiqBr.bruto && <BsCheck />}
												className={formLiqBr.bruto ? 'btn-checked' : ''}
												onClick={() =>
													setFormLiqBr({ bruto: true, liquido: false })
												}
												sx={ButtonCSS}>
												Bruto
											</Button>
											<Button
												startIcon={formLiqBr.liquido && <BsCheck />}
												className={formLiqBr.liquido ? 'btn-checked' : ''}
												onClick={() =>
													setFormLiqBr({ bruto: false, liquido: true })
												}
												sx={ButtonCSS}>
												Líquido
											</Button>
										</ButtonGroup>
										<div className='input-justify'>
											<InputCurrency
												labelContent='Aporte Inicial'
												id='aporteInitial'
												name='aporteInitial'
												type='text'
												onChange={formik.handleChange}
												value={formik.values.aporteInitial}
											/>
										</div>
										<div className='input-justify'>
											<Input
												labelContent='Prazo (em meses)'
												id='prazo'
												name='prazo'
												type='text'
												onChange={formik.handleChange}
												value={formik.values.prazo}
											/>
										</div>
										<div className='input-justify'>
											<InputPorcent
												labelContent='IPCA (ao ano)'
												id='ipca'
												name='ipca'
												type='text'
												onChange={formik.handleChange}
												value={formik.values.ipca}
											/>
										</div>
									</div>
								</div>
								<div className='form-02'>
									<div className='rendimento--tipo'>
										<div className='rendimento--tipo__title'>
											<span>Tipo de Indexação</span>
											<div>
												<AiOutlineExclamationCircle />
											</div>
										</div>

										<ButtonGroup
											sx={{ mt: '10px' }}
											fullWidth
											aria-label='large button group'>
											<Button
												startIcon={formPrePosFix.pre && <BsCheck />}
												className={formPrePosFix.pre ? 'btn-checked' : ''}
												onClick={() =>
													setFormPrePosFix({
														pre: true,
														pos: false,
														fixed: false,
													})
												}
												sx={ButtonCSS}>
												Pré
											</Button>
											<Button
												startIcon={formPrePosFix.pos && <BsCheck />}
												className={formPrePosFix.pos ? 'btn-checked' : ''}
												onClick={() =>
													setFormPrePosFix({
														pre: false,
														pos: true,
														fixed: false,
													})
												}
												sx={ButtonCSS}>
												Pos
											</Button>
											<Button
												startIcon={formPrePosFix.fixed && <BsCheck />}
												className={formPrePosFix.fixed ? 'btn-checked' : ''}
												onClick={() =>
													setFormPrePosFix({
														pre: false,
														pos: false,
														fixed: true,
													})
												}
												sx={ButtonCSS}>
												Fixado
											</Button>
										</ButtonGroup>

										<div className='input-justify'>
											<InputCurrency
												labelContent='Aporte Mensal'
												id='aporteMensal'
												name='aporteMensal'
												type='text'
												onChange={formik.handleChange}
												value={formik.values.aporteMensal}
											/>
										</div>
										<div className='input-justify'>
											<InputPorcent
												labelContent='Rentabilidade'
												id='rentabilidade'
												name='rentabilidade'
												type='text'
												onChange={formik.handleChange}
												value={formik.values.rentabilidade}
											/>
										</div>
										<div className='input-justify'>
											<InputPorcent
												labelContent='CDI (ao ano)'
												id='cdi'
												name='cdi'
												type='text'
												onChange={formik.handleChange}
												value={formik.values.cdi}
											/>
										</div>
									</div>
								</div>
							</div>
							<div>
								<button
									onChange={formik.handleChange}
									id='btn-clean'
									className='btn-form'
									type='reset'>
									Limpar Campos
								</button>
								<button id='btn-submit' className='btn-form' type='submit'>
									Simular
								</button>
							</div>
						</form>
					</section>
					<section>
						<h2>Resultado</h2>
					</section>
				</main>
			</Container>
		</>
	);
}

export default App;
