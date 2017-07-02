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
    
#### 课时6 6. 启动本地服务器
    1. 下载 webpack-dev-server 在本地启动本地服务器
       $ npm install webpack-dev-server@1.16.1 --save-dev // 下载 webpack本地启动服务器
       
    2. 配置 webpack.config.js 文件
        ```
        {
          "name": "webpackbuild",
          "version": "1.0.0",
          "description": "",
          "main": "index.js",
          "dependencies": {
            "webpack": "^1.13.2"
          },
          "devDependencies": {
            "babel-core": "^6.25.0",
            "babel-loader": "^7.1.1",
            "babel-preset-es2015": "^6.24.1",
            "html-webpack-plugin": "^2.29.0",
            "webpack-dev-server": "^1.16.1"
          },
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "build": "webpack --progress --colors",
            
            // 配置本地服务器
            "dev": "webpack-dev-server --progress --port 8080 --content-base dist" 
            /*
                --progress  配置进度
                --port 8080 配置端口
                --content-base dist 配置dist目录的根节点, 服务启动的是这个 dist 目录的文件
                --hot       node的热加载，当我们的文件改动之后就有变化 
            
            */
            
          },
          "keywords": [],
          "author": "",
          "license": "ISC"
        }
        
        ```
    3. 查看 webpack-dev-server 的目录及服务
        ./node_modules/.bin/webpack-dev-server
        
        ```
        webpackbuild\node_modules\.bin>webpack-dev-server   
        Hash: 396f0bfb9d565b6f60f0
        Version: webpack 1.13.2
        Time: 55ms
        webpack: Compiled successfully.
         http://localhost:8080/webpack-dev-server/
        webpack result is served from /
        content is served from E:\DEVELOPMENT\ZFSCRIPT\react-master\lesson05\webpack-course\webpackbuild\node_modules\.bin

        ```
        
    4. 及命令行的参数
        ```
        E:\DEVELOPMENT\ZFSCRIPT\react-master\lesson05\webpack-course\webpackbuild\node_modules\.bin>webpack-dev-server --help
        webpack-dev-server 1.16.1
        Usage: http://webpack.github.io/docs/webpack-dev-server.html
        
        Options:
          --lazy                                                                                          
          --stdin                               close when stdin ends                                     
          --info                                                                                            [default: true]
          --quiet                                                                                         
          --inline                              Inline the webpack-dev-server logic into the bundle.      
          --https                                                                                         
          --key                                 Path to a SSL key.                                        
          --cert                                Path to a SSL certificate.                                
          --cacert                              Path to a SSL CA certificate.                             
          --content-base                        A directory or URL to serve HTML content from.            
          --content-base-target                 Proxy requests to this target.                            
          --history-api-fallback                Fallback to /index.html for Single Page Applications.     
          --client-log-level                    Log level in the browser (info, warning, error or none)     [default: "info"]
          --compress                            enable gzip compression                                   
          --open                                Open default browser                                      
          --port                                The port                                                    [default: 8080]
          --public                              The public hostname/ip address of the server              
          --host                                The hostname/ip address the server will bind to             [default: "localhost"]
          --help, -h, -?                                                                                  
          --config                                                                                        
          --context                                                                                       
          --entry                                                                                         
          --module-bind                                                                                   
          --module-bind-post                                                                              
          --module-bind-pre                                                                               
          --output-path                                                                                   
          --output-file                                                                                   
          --output-chunk-file                                                                             
          --output-named-chunk-file                                                                       
          --output-source-map-file                                                                        
          --output-public-path                                                                            
          --output-jsonp-function                                                                         
          --output-pathinfo                                                                               
          --output-library                                                                                
          --output-library-target                                                                         
          --records-input-path                                                                            
          --records-output-path                                                                           
          --records-path                                                                                  
          --define                                                                                        
          --target                                                                                        
          --cache                                                                                           [default: true]
          --watch, -w                                                                                     
          --watch which closes when stdin ends                                                            
          --watch-aggregate-timeout                                                                       
          --watch-poll                                                                                    
          --hot                                                                                           
          --debug                                                                                         
          --devtool                                                                                       
          --progress                                                                                      
          --resolve-alias                                                                                 
          --resolve-loader-alias                                                                          
          --optimize-max-chunks                                                                           
          --optimize-min-chunk-size                                                                       
          --optimize-minimize                                                                             
          --optimize-occurence-order                                                                      
          --optimize-dedupe                                                                               
          --prefetch                                                                                      
          --provide                                                                                       
          --labeled-modules                                                                               
          --plugin                                                                                        
          --bail                                                                                          
          --profile                                                                                       
          -d                                    shortcut for --debug --devtool sourcemap --output-pathinfo
          -p                                    shortcut for --optimize-minimize                          

        ```
        
    6.在 webpack.config.js 下配置 webpadk-dev-server 服务
    
    - 不在这里配置
    ```
    {
      "name": "webpackbuild",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "dependencies": {
        "webpack": "^1.13.2"
      },
      "devDependencies": {
        "babel-core": "^6.25.0",
        "babel-loader": "^7.1.1",
        "babel-preset-es2015": "^6.24.1",
        "html-webpack-plugin": "^2.29.0",
        "webpack-dev-server": "^1.16.1"
      },
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack --progress --colors",
        "dev": "webpack-dev-server --progress --port 8080 --content-base dist --hot"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
    ````
    
    - 在这里配置
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
        
        
       

