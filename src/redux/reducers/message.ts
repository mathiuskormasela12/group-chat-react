// ========== Message Reducer
// import all modules
import {
  IMessageCommonReduxAction,
  IMessageReduxStates,
} from '../../interfaces';

const initialStates: IMessageReduxStates = {
  messages: [],
  loading: false,
  roomName: '',
  roomId: 0,
};

const authReducer = (
  states = initialStates,
  action: IMessageCommonReduxAction,
): IMessageReduxStates => {
  switch (action.type) {
    case 'SET_MESSAGES': {
      return {
        ...states,
        messages: action.payload.data.messages,
      };
    }

    case 'ADD_MESSAGE': {
      return {
        ...states,
        messages: [
          action.payload.data.message,
          ...states.messages,
        ],
      };
    }

    case 'SET_LOADING': {
      return {
        ...states,
        loading: action.payload.data.loading,
      };
    }

    case 'SET_ROOM_NAME': {
      return {
        ...states,
        roomName: action.payload.data.roomName,
        roomId: action.payload.data.roomId,
      };
    }

    case 'RESET_MESSAGE': {
      return {
        ...states,
        roomId: 0,
        roomName: '',
        messages: [],
        loading: false,
      };
    }

    default: {
      return {
        ...states,
      };
    }
  }
};

export default authReducer;
