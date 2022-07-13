// ========== Button
// import all modules
import React from 'react';
import styled from 'styled-components';
import { Colors } from '../themes';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <ButtonStyled {...props} />
);

const ButtonStyled = styled.button`
	outline: none;
	border: none;
	background-color: ${Colors.primary};
	font-size: 1rem;
	font-weight: bold;
	width: 100%;
	height: 3.2em;
	color: ${Colors.light};
	border-radius: .5em;
	cursor: pointer;
`;
