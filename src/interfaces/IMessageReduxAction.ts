// ========== IMessageReduxAction
// import all modules
import { MessageReduxTypes } from '../types';
import { IMessage } from '.';

export interface IMessageReduxAction {
	type: MessageReduxTypes;
	payload: {
		data: {
			message: IMessage;
		};
	}
}
