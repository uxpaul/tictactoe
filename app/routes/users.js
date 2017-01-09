'use strict'

let usersController = require('../controllers/UsersController')

module.exports = (app) => {

    let ctrl = new usersController()

    app.get('/users', (req, res, next) => {
        return ctrl.find(req, res, next)
    })

    app.get('/users/:id', (req, res, next) => {
        return ctrl.findById(req, res, next)
    })

    app.post('/users', (req, res, next) => {
        return ctrl.create(req, res, next)
    })

    app.put('/users/:id', (req, res, next) => {
        return ctrl.update(req, res, next)
    })

    app.delete('/users/:id', (req, res, next) => {
        return ctrl.delete(req, res, next)
    })

}
