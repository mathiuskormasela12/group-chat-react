// ========== IMessageRoomNameReduxAction
// import all modules
import { MessageReduxTypes } from '../types';

export interface IMessageRoomNameReduxAction {
	type: MessageReduxTypes;
	payload: {
		data: {
			roomName: string;
			roomId?: number;
		};
	}
}
