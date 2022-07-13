// ========== Container
// import all modules
import React from 'react';
import styled from 'styled-components';
import { IContainerProps } from '../interfaces';

export const Container: React.FC<IContainerProps> = ({ children, ...rest }) => (
  <ContainerStyle {...rest}>
    {children}
  </ContainerStyle>
);

const ContainerStyle = styled.div<IContainerProps>`
	width: 75%;
	margin: 0 auto;
	height: ${({ inheritHeight }) => (inheritHeight ? '100%' : 'auto')};
`;
