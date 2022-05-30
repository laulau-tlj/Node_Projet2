const { Schema, model } = require('mongoose')

const Publisher = new Schema({
    name: String,
    create_date: Date
})

const PublisherModel = model('Publisher', Publisher)

module.exports = {
    PublisherModel,
} 