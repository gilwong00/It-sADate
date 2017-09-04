const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.listen(3000, () => {
    console.log(`Running on port 3000`);
});
