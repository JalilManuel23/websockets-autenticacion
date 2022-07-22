const { Socket } = require('socket.io');
const { comprobarJWT } = require('../helpers');

const socketController = ( socket = new Socket() ) => {
    const token = socket.handshake.headers['x-token'];
    const usuario = comprobarJWT( token );

    if(!usuario) {
        return socket.disconnect();
    }
}

module.exports = {
    socketController
}