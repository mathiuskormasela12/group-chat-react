// ========== IMessageCommonReduxAction
// import all modules
import { MessageReduxTypes } from '../types';
import { IMessage } from '.';

export interface IMessageCommonReduxAction {
	type: MessageReduxTypes;
	payload: {
		data: {
			message: IMessage;
			messages: IMessage[];
			loading: boolean;
			roomName: string;
			roomId: number;
		};
	}
}
