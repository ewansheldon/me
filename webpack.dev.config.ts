import HtmlWebpackPlugin from 'html-webpack-plugin';

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
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
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
    plugins: [new HtmlWebpackPlugin({
        title: 'ewan sheldon',
        favicon: "./public/me.jpg"
    })],
    resolve: {
        extensions: ['.js', '.tsx'] // add your other extensions here
    }
};