import { SocketHandler } from '../utils/SocketHandler'

export class TestHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   * @param {{ id: string; email: string; }} user
   * @param {{ id: string; email: string; }} profile
   */
  constructor(io, socket, user, profile) {
    super(io, socket, user, profile)
    this
      .on('JOIN_ROOM', this.join)
      .on('LEAVE_ROOM', this.leave)
  }

  // REVIEW
  async join(payload) {
    this.socket.join(payload.roomId)
    this.socket.emit('JOINED', {
      user: this.user,
      profile: this.profile,
      payload
    })
  }

  // REVIEW
  async leave(payload) {
    this.socket.leave(payload.roomId)
    this.socket.emit('LEFT_ROOM', { room: payload.roomId })
  }
}
