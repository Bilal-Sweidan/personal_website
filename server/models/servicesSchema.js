const mongoose = require('mongoose')

const servicesSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    description: {
        type : String,
        required: true
    },
    features: {
        type: [String],
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Services',servicesSchema)