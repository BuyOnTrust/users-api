const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    createdAt: String,
    updatedAt: String,
    verified: Boolean
});

module.exports = mongoose.model('User', UserSchema);