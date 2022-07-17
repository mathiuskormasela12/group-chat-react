// ========== Redux Actions Types
// import all modules
import {
  IAuthReduxAction,
  IMessage,
  IMessageLoadingReduxAction,
  IMessageReduxAction,
  IMessageRoomNameReduxAction,
  IMessagesReduxAction,
} from '../interfaces';

// eslint-disable-next-line no-unused-vars
export type SetTokenFunc = (accessToken: string, refreshToken: string) => IAuthReduxAction

// eslint-disable-next-line no-unused-vars
export type SetMessagesFunc = (messages: IMessage[]) => IMessagesReduxAction;

// eslint-disable-next-line no-unused-vars
export type AddMessageFunc = (message: IMessage) => IMessageReduxAction;

// eslint-disable-next-line no-unused-vars
export type SetLoadingFunc = (loading: boolean) => IMessageLoadingReduxAction;

// eslint-disable-next-line no-unused-vars
export type SetRoomNameFunc = (roomId: number, roomName: string) => IMessageRoomNameReduxAction
