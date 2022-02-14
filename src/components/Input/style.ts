/** @format */

import styled from 'styled-components';

export const InputStyled = styled.div`
	> input {
		width: 100%;
		background: transparent;
		border: none;
		border-bottom: 1px solid var(--gray-400);
		padding: 6px;
		outline: none;
		font-size: 1rem;
		line-height: 1rem;
		transition: all ease 0.1s;
		&:hover {
			border-bottom: 2px solid var(--black);
			padding: 5.5px;
		}
		&:focus {
			border-bottom: 2px solid var(--black);
			padding: 5.5px;
		}
	}
	.error {
		border-bottom: 2px solid var(--red);
	}

	> div {
		color: var(--red)
	}
`;
