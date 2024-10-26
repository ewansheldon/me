import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: './src/index.tsx',
    output: {
        publicPath: '/me'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'ewan sheldon',
        favicon: "./public/me.ico"
    })],
    resolve: {
        extensions: ['.js', '.tsx'] // add your other extensions here
    }
};