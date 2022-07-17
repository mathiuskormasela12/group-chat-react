// ========= IMessageReduxStates
// import all modules
import { IMessage } from '.';

export interface IMessageReduxStates {
	messages: IMessage[];
	loading: boolean;
	roomName: string;
	roomId: number;
}
