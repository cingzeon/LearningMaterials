var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require("html-webpack-plugin");
//var openBrowserPlugin = require("open-browser-webpack-plugin");
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;

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
            // 编译 jsx 的语法
            {
                test: /\.js$/,
                loader: "babel",
                exclude: /node_modules/
            },
            // 编译 加载处理css样式
            {
                test: /\.css/,
                loader: "style!css",
                include: path.resolve(__dirname, "src")
            },
            // 编译 加载处理less样式
            {
                test: /\.less/,
                loader: "style!css!less",
                include: path.resolve(__dirname, "src")
            }

        ]
    },
    // 增加一个plugins 配置项
    plugins: [
        // 实例化 html-webpack-plugin
        new htmlWebpackPlugin({
            title: "搭建前端工作流",        // 设置index.html 的文件渲染标题
            template: "./src/index.html" // 指定的设置文件路径及文件名

        }),
        // 创建一个实例，并配置打包完成后自动打开浏览器
        /*new openBrowserPlugin({url: "http://localhost:8080"})*/

        // 创建一个实例, 并配置在生产环境下压缩产出文件
        new uglifyPlugin({
            compress: false
        }),

        // 创建一个实例, 并配置主要是给文件加上一些头部信息
        new webpack.BannerPlugin("作者：呈琛\n 日期:2017-7-2\n 协议：MIT\n 版本号：0.2.1")
    ]


}
module.exports = config;


