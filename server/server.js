import express from 'express';
import path from 'path';
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import apiRouter from './router/api-router';
import config from './config/config';
const PORT = process.env.PORT || 3000;

const compiler = webpack(webpackConfig);
const app = express();
config.config();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
  
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//mongo connection
mongoose.connect(process.env.MONGOOSE_CONNECT);

app.use('/api', apiRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
