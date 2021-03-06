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

    // 不在 package.json 里配置启动服务，方可在以下配置服务
    devServer: {
        // 指定的目录
        contentBase: "dist",
        //
        inline: true,
        // 配置本地服务器启动的端口为8080
        port: 8080,
        stats: {
            colors: true
        }
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


