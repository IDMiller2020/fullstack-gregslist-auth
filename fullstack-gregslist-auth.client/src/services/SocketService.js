const { SocketHandler } = require('../utils/SocketHandler')

class SocketService extends SocketHandler {
  constructor() {
    super()
    this.on('BID', this.bid)
  }

  // REVIEW payload {id, price, collection}
  bid(payload) {

  }
}

export const socketService = new SocketService()
