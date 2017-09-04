const express = require('express');
const Router = express.Router();

Router.get('/data', (req, res) => {
    res.json('api hit');
});

module.exports = Router;