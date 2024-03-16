let mongoose = require('mongoose')
let urlSchema = mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitHistry: [{ timestamp: { type: Number } }]
}, { timestamp: true })

let URL = mongoose.model('Url', urlSchema)
module.exports = URL