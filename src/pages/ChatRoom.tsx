// ========== Chat Room
// import all modules
import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import room from '../assets/images/room.svg';

// import all component
import {
  Head,
  Container,
  TextField,
  SendButton,
  BubbleChat,
} from '../components';
import { setToken } from '../redux/actions';
import { Colors, Fonts } from '../themes';

const ChatRoom: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    message: '',
    messages: [
      {
        id: 1,
        uid: 4,
        name: 'Yerin',
        message: 'Hi Mathius',
      },
      {
        id: 2,
        uid: 1,
        message: 'Hi noona',
      },
      {
        id: 3,
        uid: 4,
        name: 'Yerin',
        message: 'How are you?',
      },
      {
        id: 4,
        uid: 1,
        message: 'I am great',
      },
      {
        id: 5,
        uid: 4,
        name: 'Yerin',
        message: 'Really?',
      },
      {
        id: 6,
        uid: 1,
        message: 'Yes',
      },
      {
        id: 7,
        uid: 4,
        name: 'Yerin',
        message: 'I love you',
      },
      {
        id: 8,
        uid: 1,
        message: 'I love you noona, saranghae',
      },
    ],
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>, name:string) => {
    setState((currentState) => ({
      ...currentState,
      [name]: event.target.value,
    }));
  };

  const handleLogout = () => {
    dispatch(setToken('', ''));
    navigate('/join');
  };

  return (
    <Hero>
      <Container inheritHeight>
        <Head title="Chat Room" />
        <Row>
          <Col>
            <Image
              src={room}
              alt="Chat Room"
            />
          </Col>
          <Col>
            <Header>
              <HeaderColumn>
                <Title>Viviz</Title>
              </HeaderColumn>
              <HeaderColumn>
                <Text onClick={handleLogout}>Logout</Text>
              </HeaderColumn>
            </Header>
            <Content>
              {state.messages.map((item) => (
                <BubbleChat
                  isLeft={!!item.name}
                  key={item.id.toString()}
                  name={item.name ? item.name : ''}
                  message={item.message}
                />
              ))}
            </Content>
            <Form>
              <FormColumn>
                <TextField
                  placeholder="Type your message..."
                  value={state.message}
                  onChange={(event) => handleChange(event, 'message')}
                />
              </FormColumn>
              <FormColumn>
                <SendButton type="submit" />
              </FormColumn>
            </Form>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
};

export default ChatRoom;

const Hero = styled.div`
	height: 100vh;
	background-color: ${Colors.light};
`;

const Row = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Col = styled.div`
	width: 50%;

	&:last-child {
		height: 100%;
		width: 40%;
	}
`;

const Image = styled.img`
	width: 30rem;
	height: 30rem;
`;

const Header = styled.header`
	display: flex;
	align-items: center;
	height: 15%;
`;

const HeaderColumn = styled.div`
	flex: 1;
`;

const Title = styled.h1`
	font-size: 2.2rem;
`;

const Text = styled.p`
	font-family: ${Fonts.bold};
	font-size: 1.1rem;
	cursor: pointer;
	text-align: right;
`;

const Content = styled.div`
	height: 73%;
	padding: 0 0 1rem 0;
	overflow-y: scroll;
`;

const Form = styled.form`
	height: 12%;
	display: flex;
	justify-content: space-between;
`;

const FormColumn = styled.div`
	&:first-child {
		width: 88%;
	}

	&:last-child {
		width: 10%;
	}
`;
