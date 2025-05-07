const mongoose = require('mongoose')

const projectsSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    liveDemo : {
        type : String,
        required : true
    },
    github: {
        type: String,
    },
    technologies : {
        type : [String],
        required : true
    },
    department : {
        type : String,
        // required : true
    },
    status : {
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


module.exports = mongoose.model('Projects',projectsSchema)
