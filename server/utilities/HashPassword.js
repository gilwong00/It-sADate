import bcrypt from 'bcrypt';

export const hashUserPassword = password => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) {
        console.log(err);
        return false;
      }
      return hash;
    });
  });
}
