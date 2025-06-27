import validator from 'validator'


const validateFormInput = (name,email,subject,message) => {
    const error = [];

    if(!validator.isEmail(email)){
        error.push('Invalid email address.')
    }
}