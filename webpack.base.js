var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var getThemeConfig = require('./theme');
var theme = getThemeConfig();

module.exports = {
    entry: {
        vendor: [
            "react",
            "react-dom",
        ],
        main: ["babel-polyfill", "./src/entry/Main.tsx"],
        style:path.join(__dirname, './src/entry/index.less')
    },
    output: {
        chunkFilename: "static/js/[name].[chunkhash].js",
        filename: "static/js/[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.ts|tsx$/,
                loaders: ["babel-loader", "ts-loader"],
            },
            {
                test: /\.js?$/,
                exclude: /node_modules|dist/,
                loader: "babel-loader",
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            outputPath: "/static/images/",
                            name: "[hash:8].[name].[ext]"
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader",
                        options: {
                            sourceMap: true,
                            modifyVars: theme
                        },
                    }],
                    fallback: "style-loader",
                    publicPath: "./"
                }),
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            outputPath: "/static/fonts/",
                            name: "[name].[ext]"
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            minChunks: Infinity
        }),
        new ExtractTextPlugin({
            allChunks: true,
            filename: "static/css/[name].[contenthash].css",
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
}
