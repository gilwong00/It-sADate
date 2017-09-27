const jwt = require('jsonwebtoken');
import bcrypt from 'bcrypt';

const saltRounds = 10;
const password = 'ken';
var hashedPassword = '';

bcrypt.hash(password, saltRounds, (err, hash) => {
  hashedPassword = hash;
  console.log(hashedPassword);
});

console.log(hashedPassword);
