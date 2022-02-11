/** @format */

import { Container } from './style';
import { GlobalStyles } from './styles/globalStyles';
import { Input, FormLabel, Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';

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
						<form>
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
												defaultChecked
												aria-checked
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
											<FormLabel htmlFor='rendimento-aporte-inicial'>
												Aporte Inicial
											</FormLabel>
											<Input id='rendimento-aporte-inicial' type='text' />
										</div>
										<div className='input-justify'>
											<FormLabel htmlFor='prazo'>Prazo (em meses)</FormLabel>
											<Input id='prazo' type='text' />
										</div>
										<div className='input-justify'>
											<FormLabel htmlFor='ipca'>IPCA (ao ano)</FormLabel>
											<Input id='ipca' type='text' />
										</div>
									</div>
								</div>
								<div className='form-02'>
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
											<FormLabel htmlFor='rendimento-aporte-inicial'>
												Aporte Mensal
											</FormLabel>
											<Input id='rendimento-aporte-inicial' type='text' />
										</div>
										<div className='input-justify'>
											<FormLabel htmlFor='prazo'>Rentabilidade</FormLabel>
											<Input id='prazo' type='text' />
										</div>
										<div className='input-justify'>
											<FormLabel htmlFor='ipca'>CDI (ao ano)</FormLabel>
											<Input id='ipca' type='text' />
										</div>
									</div>
								</div>
							</div>
							<div>
								<button id='btn-clean' className='btn-form' type='reset'>
									Limpar Campos
								</button>
								<button
									disabled
									id='btn-submit'
									className='btn-form'
									type='submit'>
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
