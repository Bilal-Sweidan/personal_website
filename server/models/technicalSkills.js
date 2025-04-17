const mongoose = require('mongoose')

const technicalSkillsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    percentage : {
        type : Number,
        required : true
    },
    technology : {
        type : [String],
        required : true
    },
    icon : {
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

module.exports = mongoose.model('TechnicalSkills',technicalSkillsSchema)