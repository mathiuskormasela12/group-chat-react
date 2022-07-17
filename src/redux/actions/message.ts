// ========== Message Action
// import all modules
import { IMessage } from '../../interfaces';
import {
  AddMessageFunc, SetLoadingFunc, SetMessagesFunc, SetRoomNameFunc,
} from '../../types';

export const setMessages: SetMessagesFunc = (messages: IMessage[]) => ({
  type: 'SET_MESSAGES',
  payload: {
    data: {
      messages,
    },
  },
});

export const addMessage: AddMessageFunc = (message: IMessage) => ({
  type: 'ADD_MESSAGE',
  payload: {
    data: {
      message,
    },
  },
});

export const setLoading: SetLoadingFunc = (loading: boolean) => ({
  type: 'SET_LOADING',
  payload: {
    data: {
      loading,
    },
  },
});

export const setRoomName: SetRoomNameFunc = (roomId: number, roomName: string) => ({
  type: 'SET_ROOM_NAME',
  payload: {
    data: {
      roomName,
      roomId,
    },
  },
});
