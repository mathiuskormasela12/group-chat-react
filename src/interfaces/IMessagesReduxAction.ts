// ========== IMessagesReduxAction
// import all modules
import { MessageReduxTypes } from '../types';
import { IMessage } from '.';

export interface IMessagesReduxAction {
	type: MessageReduxTypes;
	payload: {
		data: {
			messages: IMessage[];
		};
	}
}
