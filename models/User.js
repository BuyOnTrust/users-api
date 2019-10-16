const mongoose = require('mongoose');

const name = new mongoose.Schema({
    first: String,
    last: String
}, { _id: false, autoIndex: false });

const UserSchema = new mongoose.Schema({
    name: name,
    email: String,
    phone: String,
    createdAt: String,
    updatedAt: String,
    consent: Boolean
});

module.exports = mongoose.model('User', UserSchema);