const jwt = require('jsonwebtoken');

export const signToken = userId => {
  return jwt.sign({ userId }, 'abc123');
}
