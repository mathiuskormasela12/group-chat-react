// ========= IMessage

export interface IMessage {
	id: number;
	message: string;
	users: {
		id: number;
		name: string;
	}
}
