import express from 'express';
const Router = express.Router();

import { getString } from '../controllers/test-controller';

Router.get('/data', async (req, res) => {
    let data = await getString();
    res.json(data);
});

module.exports = Router;
