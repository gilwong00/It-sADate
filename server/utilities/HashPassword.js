import bcrypt from 'bcrypt';

export const hashUserPassword = password => {
    let salt = bcrypt.genSaltSync(5);
    let encryptedPassword = bcrypt.hashSync(password, salt);
    return encryptedPassword
}

export const compareUserPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}
