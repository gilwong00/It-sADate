const jwt = require('jsonwebtoken');
import bcrypt from 'bcrypt';

const saltRounds = 10;
const password = 'ken';
var hashed = '';


bcrypt.hash(password, saltRounds, (err, hash) => {
  hashedPassword = hash;
  return () => {
    console.log(hashedPassword);
  };
});
