const mongoose = require('mongoose')

const contactInfoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    relatedLinks: {
        type: [{
            name: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                required: true
            }
        }],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ContactInfo', contactInfoSchema)