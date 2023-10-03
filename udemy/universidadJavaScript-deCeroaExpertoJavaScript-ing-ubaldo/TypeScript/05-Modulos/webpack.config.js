const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/05-01-Modulos.ts'),
    output: {
        filename: '05-01-Modulos.js',
        path: __dirname
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
};