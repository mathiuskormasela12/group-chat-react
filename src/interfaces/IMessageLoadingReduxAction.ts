// ========== IMessageLoadingReduxAction
// import all modules
import { MessageReduxTypes } from '../types';

export interface IMessageLoadingReduxAction {
	type: MessageReduxTypes;
	payload: {
		data: {
			loading: boolean;
		};
	}
}
