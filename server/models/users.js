import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
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

UserSchema.pre('save', function(next) {
  const user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, async (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next()
  }
});

module.exports = mongoose.model('User', UserSchema);
