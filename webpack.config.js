const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/Aula 18 - WebPack/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist', 'assets', 'js'),
    },
    devtool: 'source-map'
};
