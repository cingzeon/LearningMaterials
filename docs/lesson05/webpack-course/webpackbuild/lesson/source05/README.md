# 项目开发指导

## 基本环境
    

## 依赖技术点
   - webpack 
   - babel 语法解析
   - es6/7 基本语法
   - eslint 语法检查
   - npm script 统一任务构建
   - react 组件 基础类库
   - mocha
   - karma 单元测试

## 如何开发

$ npm install
```
    $ npm init -y                               // 初始化
    $ mkdir src                                 // 创建文件夹
    $ touch index.html README.mkd               // 创建文件
    $ npm install webpack@1.13.2 -g             // 全局环境的安装 
    $ npm install webpack@1.13.2 --save-dev     // 本地环境的安装
    $ touch webpack.config.js                   // 创建一个webpack.config.js 的配置文件
    $ npm install babel-loader babel-core babel-preset-es2015 --save-dev  // es6编译工具   


```
$ npm run build



###  课时5 5. 自动产出html
    1. 先把index.html文件移动到src的目录下去
    $ mv index.html src     // (mv)移动 index.html(目标文件) 到src(目录)下
    
    2. 下载 html-webpack-plugin 自动产出的thml插件
    $ npm install html-webpack-plugin --save-dev
    
    3. 配置 webpack.config.js 文件
    
    ```
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
        
    ```
    3. index.html 文件调用 html-webpack.plugin 模板插件
       - webpackbuild\src\index.html
       
       ```
           <!DOCTYPE html>
           <html lang="en">
           <head>
               <meta charset="UTF-8">
               <meta name="viewport" content="width=device-width, initial-scale=1.0">
               <meta http-equiv="X-UA-Compatible" content="ie=edge">
               <!--调用 html-webpack.plugin 模板插件的标题输出-->
               <title><%= htmlWebpackPlugin.options.title %></title>
           </head>
           <body>
           
           <script src="./dist/bundle.js"></script>
           </body>
           </html>
       ```
    
    
