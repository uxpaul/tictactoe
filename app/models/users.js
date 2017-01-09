'use strict'

let mongoose = require('mongoose')

module.exports = mongoose.model('User', new mongoose.Schema({

    name: {
        type: String,
        unique: true
    },
    surname: {
        type: String
    },
    pseudo: {
        type: String
    },
    level: {
        type: Number
    },
    avatar: {
        type: String
    },
    PublishedAt: {
        type: String
    },
}, {
    timestamps: true
}))
