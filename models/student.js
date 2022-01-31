const mongoose = require('mongoose');
const validator = require('validator');
const newStudent = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    class: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")
            }
        }
    }
})

const Student = new mongoose.model('newStudent', newStudent);
module.exports = Student;