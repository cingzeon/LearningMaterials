var path = require('path');
var webpack = require('webpack');

// 配置文件
var config = {
    // 入口文件
    enty: path.resolve(__dirname, "./src/index.js"),
    output: {
        // 输出打包的文件文件所存放的目录
        path: path.resolve(__dirname, "dist"),
        // 打包后输出生成的文件，名字可自定义
        filename: "bundle.js"
    }
}
module.exports = config;
