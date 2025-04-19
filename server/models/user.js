const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    resetPasswordToken: {
        type: String,
        required: false
    },
    resetPasswordExpires: {
        type: Date,
        required: false
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


const { hash } = require('../utils/hash')
// Pre-save middleware to hash password
userSchema.pre('save', async function (next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) return next()

    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10)
        // Hash the password with the salt
        this.password = await hash(this.password)
        next()
    } catch (error) {
        next(error)
    }
})

module.exports = mongoose.model('User', userSchema)  
