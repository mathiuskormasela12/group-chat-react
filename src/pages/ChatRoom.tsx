// ========== Chat Room
// import all modules
import React, { FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IReduxStates } from '../interfaces';
import { setToken } from '../redux/actions';

const ChatRoom: React.FC = () => {
  const dispatch = useDispatch();
  const accessToken: string = useSelector((states: IReduxStates) => states.auth.accessToken);

  const handleSetToken = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setToken(String(Date.now()), String(Date.now())));
  };

  const handleResetToken = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setToken('', ''));
  };

  return (
    <div>
      <h1>Chat Room</h1>
      <form>
        {accessToken !== '' && (
        <p>Ada Token</p>
        )}
        <button
          type="submit"
          onClick={handleSetToken}
        >
          Set Token

        </button>
        <br />
        <br />
        <button
          type="submit"
          onClick={handleResetToken}
        >
          Reset Token

        </button>
      </form>
    </div>
  );
};

export default ChatRoom;
