const mongoose = require('mongoose')

const cvFileSchema = new mongoose.Schema({
    file : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('CvFile',cvFileSchema)
