// =========== Service
// import all modules
import { IJoinRoomBody } from '../interfaces';
import http from './http';

class Services {
  public static joinRoom(data: IJoinRoomBody) {
    return http().post('/auth/join', data);
  }

  public static updateRoomName(id: number, roomName: string) {
    return http().put(`/auth/room/${id}`, { roomName });
  }
}

export default Services;
