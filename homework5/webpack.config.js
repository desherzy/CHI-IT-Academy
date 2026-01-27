const path = require('path');

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource'
            }
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        port: 8080,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
};
