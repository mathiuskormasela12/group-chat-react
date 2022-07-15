// ========== Bubble Chat
// import all modules
import React from 'react';
import styled from 'styled-components';
import { IBubbleChatProps } from '../interfaces';
import { Colors } from '../themes';

export const BubbleChat: React.FC<IBubbleChatProps> = (props) => {
  const { name, message } = props;

  return (
    <BubbleContainer {...props}>
      <Title>
        {name}
      </Title>
      <BubbleContent {...props}>
        <Bubble {...props}>
          <Text {...props}>
            {message}
          </Text>
        </Bubble>
      </BubbleContent>
    </BubbleContainer>
  );
};

const BubbleContainer = styled.div <IBubbleChatProps>`
	& > h1 {
		margin-bottom: .6rem;
	}
`;

const BubbleContent = styled.div <IBubbleChatProps>`
	display: flex;
	justify-content: ${({ isLeft }) => (isLeft ? 'flex-start' : 'flex-end')};
`;

const Bubble = styled.div<IBubbleChatProps>`
	padding: 1rem 2rem 1rem 1rem;
	background-color: ${({ isLeft }) => (isLeft ? Colors.lightPrimary : Colors.darkGray)};
	border-radius: .7rem;
`;

const Title = styled.h1`
	font-weight: normal;
	font-size: 1.1rem;
	color: ${Colors.dark};
`;

const Text = styled.p<IBubbleChatProps>`
	font-size: 1rem;
	color: ${Colors.dark};
	color: ${({ isLeft }) => (isLeft ? Colors.light : Colors.dark)};
	text-align: left;
`;
