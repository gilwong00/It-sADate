const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackBuildNotifier = require('webpack-build-notifier');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: ['./public/src/index.js'],
    output: {
        path: path.resolve(__dirname, './public/build'),
        filename: 'bundle.js',
        publicPath: '/build'
    },
    target: "web",
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './public/src')
                ],
                exclude: [
                    path.resolve(__dirname, './node_modules')
                ],
                loader: "babel-loader",
                options: {
                    presets: ['es2015', 'react', 'stage-3'],
                    plugins: ['babel-polyfill', 'transform-class-properties', 'transform-runtime', 'transform-async-to-generator', 'transform-regenerator']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'url-loader'
            },
            {
                test: /\.(jpe|jpg|png)(\?.*$|$)/,
                loader: 'file-loader'
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'app.css'
        }),
        new WebpackBuildNotifier({
            title: "webpack",
            suppressSuccess: false
        }),
        new CleanWebpackPlugin(['./public/build']),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, './node_modules')
        ],
        extensions: [".js", ".json", ".jsx", ".css"]
    }
};