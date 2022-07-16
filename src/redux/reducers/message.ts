// ========== Message Reducer
// import all modules
import {
  IMessageCommonReduxAction,
  IMessageReduxStates,
} from '../../interfaces';

const initialStates: IMessageReduxStates = {
  messages: [],
  loading: false,
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

    default: {
      return {
        ...states,
      };
    }
  }
};

export default authReducer;
