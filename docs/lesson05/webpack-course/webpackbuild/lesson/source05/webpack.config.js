var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require("html-webpack-plugin");

// 配置文件
var config = {
    // 入口文件
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        // 输出打包的文件文件所存放的目录
        path: path.resolve(__dirname, "dist"),
        // 打包后输出生成的文件，名字可自定义
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: /node_modules/
            }
        ]
    },
    // 增加一个plugins 配置项
    plugins: [
        // 实例化 html-webpack-plugin
        new htmlWebpackPlugin({
            title: "搭建前端工作流",        // 设置index.html 的文件渲染标题
            template: "./src/index.html" // 指定的设置文件路径及文件名

        })
    ]
}
module.exports = config;


