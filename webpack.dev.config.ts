import HtmlWebpackPlugin from 'html-webpack-plugin';
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [new Dotenv({
        path: './.env', // Path to .env file (this is the default)
        }),
        new HtmlWebpackPlugin({
            title: 'ewan sheldon',
            favicon: "./public/me.jpg"
        })],
    resolve: {
        extensions: ['.js', '.tsx'] // add your other extensions here
    }
};