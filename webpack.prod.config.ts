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
    plugins: [new HtmlWebpackPlugin({
        title: 'ewan sheldon',
        favicon: "./public/me.jpg"
    })],
    resolve: {
        extensions: ['.js', '.tsx'] // add your other extensions here
    }
};