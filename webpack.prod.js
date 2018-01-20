var webpack = require('webpack');
var webpackMerge = require("webpack-merge");
var commonConfig = require("./webpack.base");
var cleanWebpackPlugin = require("clean-webpack-plugin");
var htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = webpackMerge(commonConfig, {
    devtool: "source-map",
    output: {
        publicPath: "./dist/",
    },
    plugins: [
        new cleanWebpackPlugin(["dist"]),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
            },
        }),

        new htmlWebpackPlugin({
            favicon: "./vendor/favicon.ico",
            minify: {
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                // ignoreCustomComments: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                // keepClosingSlash: true,
                useShortDoctype: true,
            },
            template: "./index.html",
            title: "Production",
        }),
    ],
})
