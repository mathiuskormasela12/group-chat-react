// ========== IReduxStates
// import all modules
import { IMessage } from '.';

export interface IReduxStates {
	auth: {
		accessToken: string;
		refreshToken: string;
	},
	message: {
		messages: IMessage[];
		loading: boolean;
		roomId: number;
		roomName: string;
	}
}
