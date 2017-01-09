'use strict'

let Controller = require('./Controller') // on étend la classe Controller
const USER = require('../models/users') //Appel du model user

class usersController extends Controller {
    constructor(io) {
        super(USER)
        this.io = io
        var numClients = 0;
        this.io.on('connection', (socket) => {
            this._onConnection(socket)
        });

        //my-namespace
        var nsp = io.of('/tictactoe');
        nsp.on('connection', (socket) => {
            this._onSpace(socket)
            numClients++;
            nsp.emit('stats', {
                numClients: numClients
            });

            socket.on('disconnect', function() {
                numClients--;
                nsp.emit('stats', {
                    numClients: numClients
                });

                console.log(numClients)

                nsp.emit('disconnect', {
                    id: socket.id
                });

            });

        });

    }

    _onSpace(socket) {
        console.log('User connect _onSpace');

        // Disconnect the selected socket
        socket.on('disconnect me', () => {
            console.log("Disconnected")
            socket.disconnect(true)
        })

    }

    _onConnection(socket) {

      console.log('_onConnection');

    }

}

module.exports = usersController
