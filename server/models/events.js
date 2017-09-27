const mongoose = require('mongoose');

const EventScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Event', UserSchema);
