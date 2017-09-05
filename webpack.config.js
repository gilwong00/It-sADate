var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './public/src/index.js',
    output: {
        path: path.resolve(__dirname, './public/build'),
        filename: 'bundle.js',
        publicPath: '/build'
    },
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
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'app.css'
        })
    ],
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, './node_modules')
        ],
        extensions: [".js", ".json", ".jsx", ".css"]
    }
};
