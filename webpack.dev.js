
var webpack = require('webpack');
var webpackMerge = require("webpack-merge");
var commonConfig = require("./webpack.base");
var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');

module.exports = webpackMerge(commonConfig,{
    cache: false,
    output: {
        publicPath: "/dist/",
    },
    devServer: {
        host: "127.0.0.1",
        hot: true,
        open: true,
        port: 9010,
        useLocalIp: false,
        publicPath: "/dist/",
        //contentBase: "./dist",
    },
    devtool: "source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
        }),
        new htmlWebpackPlugin({
            favicon: path.resolve(__dirname, "./vendor/favicon.ico"),
            template: path.resolve(__dirname, "./index.html"),
            title: "Development",
        }),
    ],
})
