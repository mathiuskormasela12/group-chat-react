// ========== IAuthReduxAction
// import all modules
import { AuthReduxTypes } from '../types';
import { IAuthReduxStates } from './IAuthReduxStates';

export interface IAuthReduxAction {
	type: AuthReduxTypes;
	payload: {
		data: IAuthReduxStates;
	}
}
