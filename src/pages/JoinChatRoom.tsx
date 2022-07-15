// ========== Join Chat Room
// import all modules
import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { Colors, Fonts } from '../themes';
import { IHeroColJoinPageProps } from '../interfaces';
import joinRoomImg from '../assets/images/join-room.svg';
import changingRoomName from '../assets/images/changing-room-name.svg';

// import all components
import {
  Container,
  TextField,
  Button,
  Header,
} from '../components';

const JoinChatRoom: React.FC = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    roomId: '',
    roomName: '',
    isJoinPage: true,
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>, name: string) => {
    setState((currentStates) => ({
      ...currentStates,
      [name]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState((currentStates) => ({
      ...currentStates,
      isJoinPage: !currentStates.isJoinPage,
    }));
  };

  if (!state.isJoinPage) {
    return (
      <Hero>
        <Header title="Join a Room" />
        <Container inheritHeight>
          <HeroFlex>
            <HeroCol isJoinPage={state.isJoinPage}>
              <Image src={changingRoomName} alt="Join Image" />
            </HeroCol>
            <HeroCol isJoinPage={state.isJoinPage}>
              <Form onSubmit={handleSubmit}>
                <Title>Create a Room</Title>
                <Control>
                  <Label htmlFor="room-name">
                    Room Name
                  </Label>
                  <Field>
                    <TextField
                      type="text"
                      placeholder="Type your name here..."
                      id="room-name"
                      value={state.roomName}
                      onChange={(event) => onChange(event, 'roomName')}
                    />
                  </Field>
                </Control>
                <Control>
                  <Button type="submit">
                    Create
                  </Button>
                </Control>
              </Form>
            </HeroCol>
          </HeroFlex>
        </Container>
      </Hero>
    );
  }

  return (
    <Hero>
      <Header title="Join a Room" />
      <Container inheritHeight>
        <HeroFlex>
          <HeroCol isJoinPage={state.isJoinPage}>
            <Form onSubmit={handleSubmit}>
              <Title>Group Chat</Title>
              <Control>
                <Label htmlFor="name">
                  Your Name
                </Label>
                <Field>
                  <TextField
                    type="text"
                    placeholder="Type your name here..."
                    id="name"
                    value={state.name}
                    onChange={(event) => onChange(event, 'name')}
                  />
                </Field>
              </Control>
              <Control>
                <Label htmlFor="email">
                  Email
                </Label>
                <Field>
                  <TextField
                    type="email"
                    placeholder="Type your email here..."
                    id="email"
                    value={state.email}
                    onChange={(event) => onChange(event, 'email')}
                  />
                </Field>
              </Control>
              <Control>
                <Label htmlFor="room-id">
                  Room Id
                </Label>
                <Field>
                  <TextField
                    type="text"
                    placeholder="Type your room id here..."
                    id="room-id"
                    value={state.roomId}
                    onChange={(event) => onChange(event, 'roomId')}
                  />
                </Field>
              </Control>
              <Control>
                <Button type="submit">
                  Join
                </Button>
              </Control>
            </Form>
          </HeroCol>
          <HeroCol isJoinPage={state.isJoinPage}>
            <Image src={joinRoomImg} alt="Join Image" />
          </HeroCol>
        </HeroFlex>
      </Container>
    </Hero>
  );
};

export default JoinChatRoom;

const Hero = styled.div`
	background-color: ${Colors.light};
	height: 100vh;

	@media (max-width: 768px) and (orientation: landscape) {
		height: auto;
		padding: 15vmax 0;
	}
`;

const HeroFlex = styled.div`
	height: 100%;
	display: flex;
`;

const HeroCol = styled.div<IHeroColJoinPageProps>`
	${(props) => {
    if (props.isJoinPage) {
      return `
				flex: 1;
				height: 100%;
				display: flex;
				align-items: center;
				
				&:last-child {
					justify-content: flex-end;
					flex: 2;
				}

				@media (max-width: 1200px) {
					&:last-child {
						display: none;
					}
				}
			`;
    }

    return `
		flex: 2;
		height: 100%;
		display: flex;
		align-items: center;
		
		&:last-child {
			justify-content: center;
			flex: 1;
		}

		@media (max-width: 1200px) {
			&:first-child {
				display: none;
			}
		}
		
		`;
  }}
`;

const Image = styled.img`
	width: 22rem;
	height: 22rem;
`;

const Title = styled.h1`
	font-size: 1.8rem;
	color: ${Colors.dark};
	font-family: ${Fonts.bold};
	margin-bottom: 2rem;

	@media(max-width: 1200px) {
		text-align: center;
	}
`;

const Form = styled.form`
	width: 100%;
`;

const Control = styled.div`
	margin-bottom: 1.5rem;
	width: 100%;
`;

const Field = styled.div`
	width: 100%;
`;

const Label = styled.label`
	margin-bottom: .8rem;
	display: inline-block;
`;
