import express from 'express';
import User from '../models/users';
const Router = express.Router();

import * as UserController from '../controllers/user-controller';
import { getString } from '../controllers/test-controller';

Router.get('/data', async (req, res) => {
    let data = await getString();
    console.log('log data', data);
    res.json(data);
});

Router.post('/create', UserController.createUser);

Router.post('/login', UserController.login)

module.exports = Router;
