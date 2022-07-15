// ========== Send Button
// import all modules
import React from 'react';
import styled from 'styled-components';
import { Colors } from '../themes';
import arrowSend from '../assets/images/arrow-send.svg';

export const SendButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <ButtonStyled {...props}>
    <ButtonStyledImage src={arrowSend} alt="Send Icon" />
  </ButtonStyled>
);

const ButtonStyled = styled.button`
	outline: none;
	border: none;
	cursor: pointer;
	color: ${Colors.light};
	font-size: 1rem;
	height: 3.2em;
	width: 3.2em;
	background-color: ${Colors.primary};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ButtonStyledImage = styled.img`
	color: ${Colors.light};
	width: 1.1rem;
	height: 1.1rem;
`;
