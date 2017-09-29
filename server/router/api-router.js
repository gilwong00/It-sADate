import express from 'express';
import User from '../models/users';
import bcrypt from 'bcrypt';
import { hashUserPassword } from '../utilities/HashPassword';
const Router = express.Router();

import * as UserController from '../controllers/user-controller';
import { getString } from '../controllers/test-controller';

Router.get('/data', async (req, res) => {
    let data = await getString();
    console.log('log data', data);
    res.json(data);
});

Router.post('/create', UserController.createUser);

// Router.post('/create', async (req, res) => {
//   let { name, email, password, username } = req.body;
//   const user = await new User({
//     name, email, password, username
//   }).save();
//   res.json(user);
// });

module.exports = Router;
