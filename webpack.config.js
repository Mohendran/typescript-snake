const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/index.ts'),
    output: {
        filename: 'app.js',
        path: __dirname + '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './assets',
            to: './assets',
            toType: 'dir'
        }, {
            from: './src/index.html',
            to: '',
            toType: 'dir'
        }])
    ]
};