'use strict'

let Controller = require('./Controller') // on étend la classe Controller
const USER = require('../models/users') //Appel du model user

class usersController extends Controller {
    constructor() {
        super(USER)
    }


}

module.exports = usersController
