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
];

const phoneValidator = [
    validate({
        validator: 'isLength',
        arguments: [10,15],
        message: 'Phone should be between {ARGS[0]} and {ARGS[1]} characters long',
    }),
];

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

const consentObj = {
    consent: Boolean,
    optin_date: Date
};

const approvalObj = new mongoose.Schema({
    application_id: String,
    app_status: String,
    approval_amount: String,
    approval_used: String,
    approval_date: Date
}, { _id: false, autoIndex: false });

const checkoutObj = new mongoose.Schema({
    lease_id: String,
    checkout_token: String,
    checkout_date: Date
}, { _id: false, autoIndex: false });

const UserSchema = new mongoose.Schema({
    name,
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: emailValidator
    },
    phone: {
        type: String,
        required: true,
        validate: phoneValidator
    },
    optin: consentObj,
    approval: approvalObj,
    checkout: checkoutObj,
    clickId: Number,
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    modified: {
        type: Date,
        default: Date.now,
        required: true
    }
});

export default mongoose.model('User', UserSchema);