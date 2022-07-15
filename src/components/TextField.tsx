// ========== TextField
// import all modules
import React from 'react';
import styled from 'styled-components';
import { Colors } from '../themes';

export const TextField: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <Input {...props} />
);

const Input = styled.input`
	outline: none;
	border: none;
	width: 100%;
	font-size: 1rem;
	height: 3.2em;
	background-color: ${Colors.darkGray};
	padding: 0 1em;
	border-radius: .5em;
`;
