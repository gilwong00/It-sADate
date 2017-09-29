import bcrypt from 'bcrypt';

export const hashUserPassword = password => {
    let salt = bcrypt.genSaltSync(5);
    let encryptedPassword = bcrypt.hashSync(password, salt);
    return encryptedPassword
}
