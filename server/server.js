import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import apiRouter from './router/api-router';
import config from './config/config';

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
config.config();

//mongo connection
mongoose.connect(process.env.MONGOOSE_CONNECT);

app.use('/api', apiRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(3000, () => {
    console.log(`Running on port 3000`);
});
