import User from '../models/users';
import { hashUserPassword } from '../utilities/HashPassword';

export const createUser = async(req, res) => {
    let { name, email, password, username } = req.body;
    let excryptedPW = await hashUserPassword(password);
    password = excryptedPW;

    const newUser = new User({
        name, email, password, username
    })

    newUser.save(err => {
        if (err) {
            return console.error(err)
        }
        else {
            res.json(newUser);
        }
    });
};
