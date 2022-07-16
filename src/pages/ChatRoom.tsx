// ========== Chat Room
// import all modules
import React, { ChangeEvent, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import room from '../assets/images/room.svg';
import loadingIcon from '../assets/images/loading.svg';
import emptyIcon from '../assets/images/empty.svg';

// import all component
import {
  Head,
  Container,
  TextField,
  SendButton,
  BubbleChat,
} from '../components';
import { setToken, setMessages, setLoading } from '../redux/actions';
import { Colors, Fonts } from '../themes';
import { IMessage, IReduxStates } from '../interfaces';

const ChatRoom: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uid: number = 2064;
  const loading: boolean = useSelector((states: IReduxStates) => states.message.loading);
  const messages: IMessage[] = useSelector((states: IReduxStates) => states.message.messages);
  const [state, setState] = useState({
    message: '',
    messages: [],
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

  const handleConfirmDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete();
      }
    });
  };

  const handleDelete = () => {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success',
    );
  };

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
      dispatch(setMessages([
        {
          id: 1,
          message: 'Hi Mathius',
          users: {
            id: 2064,
            name: 'Yerin',
          },
        },
        {
          id: 2,
          message: 'Ya noona',
          users: {
            id: 2065,
            name: 'Mathius',
          },
        },
      ]));
    }, 4000);
  }, []);

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
              {loading && (
              <PlaceholderContainer>
                <PlaceholderImage
                  src={loadingIcon}
                  alt="Loading"
                />
              </PlaceholderContainer>
              )}
              {!loading && messages.length < 1 && (
              <PlaceholderContainer>
                <PlaceholderImage
                  src={emptyIcon}
                  alt="Empty"
                />
              </PlaceholderContainer>
              )}
              {(!loading) && messages.map((item) => (
                <BubbleChat
                  isLeft={uid === item.users.id}
                  key={item.id.toString()}
                  name={item.users.name}
                  message={item.message}
                  onDoubleClick={handleConfirmDelete}
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

	@media (max-width: 1200px) {
		&:first-child {
			display: none;
		}

		&:last-child {
			width: 100% !important;
		}
	}

	&:last-child {
		height: 100%;
		width: 40%;
	}
`;

const PlaceholderContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const PlaceholderImage = styled.img`
	width: 80%;
	height: 80%;
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
	color: ${Colors.danger};
`;

const Content = styled.div`
	height: 70%;
	padding: 0 0 1rem 0;
	overflow-y: scroll;
	overflow-y: scroll;
	scrollbar-width: none;
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
`;

const Form = styled.form`
	height: 15%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const FormColumn = styled.div`
	&:first-child {
		width: 85vmax;
	}

	&:last-child {
		width: 15vmax;
		display: flex;
		justify-content: flex-end;
	}

	@media (max-width: 1024px) {
		&:first-child {
			width: 80vmax;
		}
	
		&:last-child {
			width: 20vmax;
			display: flex;
			justify-content: flex-end;
		}
	}

	@media (min-width: 1024px) and (max-width: 1300px) {
		&:first-child {
			width: 84vmax;
		}
	
		&:last-child {
			width: 16vmax;
			display: flex;
			justify-content: flex-end;
		}
	}
`;
