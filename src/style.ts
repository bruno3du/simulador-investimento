/** @format */

import styled from 'styled-components';

export const Container = styled.div`
	background: var(--gray-100);
	width: 95%;
	height: 90vh;
	margin: auto;
	padding: 30px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	header {
		h1 {
			margin: 0;
		}
	}

	main {
		margin-top: 30px;
		width: 100%;
		display: flex;

		section {
			flex: 1;
			h2 {
				margin-bottom: 20px;
			}

			form {
				max-width: 480px;

				.btn-form {
					width: 100%;
					height: 50px;
					margin-top: 20px;
					border-radius: 10px;
					font-weight: 600;
					border: none;
					transition: all ease 0.3s;
				}

				#btn-clean {
					border: 1px solid var(--black);
					&:hover {
						filter: opacity(0.8);
					}
				}

				#btn-submit {
					background: var(--orange);
					&:hover {
						filter: opacity(0.8);
					}
					&:disabled {
						background: var(--gray-400);
						cursor: default;
					}
				}

				.btn-checked {
					background: var(--orange);
					color: white;
				}

				> div {
					display: flex;
					gap: 40px;
				}
				label {
					font-size: 12px;
					font-weight: 600;
				}
				.input-justify {
					margin-top: 30px;
					display: flex;
					flex-direction: column;
				}
				.rendimento--tipo__title {
					display: flex;
					justify-content: space-between;
					align-items: center;

					span {
						font-weight: 500;
						font-size: 12px;
					}
				}
			}
		}
	}
`;
