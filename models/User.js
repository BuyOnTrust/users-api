const mongoose = require('mongoose');
const validate = require('mongoose-validator');

const nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [2, 50],
        message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
    }),
    validate({
        validator: 'isAlpha',
        passIfEmpty: true,
        message: 'Name should contain alpha-numeric characters only',
    }),
];

const emailValidator = [
    validate({
        validator: 'isEmail',
        message: 'Email should contain a valid email address',
    }),
    validate({
        validator: 'isLength',
        arguments: [6, 50],
        message: 'Email should be between {ARGS[0]} and {ARGS[1]} characters',
    }),
]


const name = new mongoose.Schema({
    first: {
        type: String,
        required: true,
        validate: nameValidator
    },
    last: {
        type: String,
        required: true,
        validate: nameValidator
    }
}, { _id: false, autoIndex: false });

const UserSchema = new mongoose.Schema({
    name: name,
    email: {
        type: String,
        required: true,
        validate: emailValidator
    },
    phone: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    consent: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);