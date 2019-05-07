const path = require('path');

module.exports = {
    entry: path.join(__dirname, './src/index.ts'),
    output: {
        filename: './dist/index.js',
        path: __dirname
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                enforce: 'pre',
                loader: 'tslint-loader'
            },
            {
                test: /\.(ts)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};
