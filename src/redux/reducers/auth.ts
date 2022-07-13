// ========== Auth Reducer
// import all modules
import { IAuthReduxAction, IAuthReduxStates } from '../../interfaces';

const initialStates: IAuthReduxStates = {
  accessToken: '',
  refreshToken: '',
};

const authReducer = (states = initialStates, action: IAuthReduxAction): IAuthReduxStates => {
  switch (action.type) {
    case 'SET_TOKEN': {
      return {
        ...states,
        accessToken: action.payload.data.accessToken,
        refreshToken: action.payload.data.refreshToken,
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
