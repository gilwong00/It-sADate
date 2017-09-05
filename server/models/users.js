const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    allowedContacts: {
        type: [],
        required: false
    }
});

module.exports = mongoose.model('User', UserSchema);
