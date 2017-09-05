const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const apiRouter = require('./server/router/api-router');
const app = express();
const key = require('./config/config');

mongoose.connect(key.config);
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.listen(3000, () => {
    console.log(`Running on port 3000`);
});
