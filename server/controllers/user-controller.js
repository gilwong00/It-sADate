import User from '../models/users';
import { hashUserPassword, compareUserPassword } from '../utilities/HashPassword';
import { signToken } from '../utilities/JWT';

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
            //res.json(newUser);
            res.status(200).send("Success");
        }
    });
};

export const login = async(req, res) => {
  let { username, password } = req.body;
  const user = await User.findOne({ username });
  if (compareUserPassword(password, user.password)) {
    let token = signToken(user._id);
    res.status(200).send(token);
  } else {
    res.status(404).send("Invalid username or password");
  }
}
