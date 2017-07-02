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

    $ npm init -y                               // 初始化
    $ mkdir src                                 // 创建文件夹
    $ touch index.html README.mkd               // 创建文件
    $ npm install webpack@1.13.2 -g             // 全局环境的安装 
    $ npm install webpack@1.13.2 --save-dev     // 本地环境的安装
    $ touch webpack.config.js                   // 创建一个webpack.config.js 的配置文件
    $ npm install babel-loader babel-core babel-preset-es2015 --save-dev  // es6编译工具   
    $ npm run build



###  课时5 5. 自动产出html
    1. 先把index.html文件移动到src的目录下去
    $ mv index.html src     // (mv)移动 index.html(目标文件) 到src(目录)下
    
    2. 下载 html-webpack-plugin 自动产出的thml插件
    $ npm install html-webpack-plugin --save-dev
    
    3. 配置 webpack.config.js 文件
    
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
   
    
    - 在这里配置
    
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
    
     
        
#### 课时7 7. 打包react
     1. 下载 react react-dom
           $ npm install react react-dom --save-dev     // 下载 react react-dom
           $ cd src                                     // 进入 src 目录
           $ mkdir components containers                // 创建一个 components（组件目录） 和一个 containers（容器目录）
           $ rm -rf component.js                        // 删除 src 下面的一个 component.js 文件
           $ cd components                              // 进入 components 目录
           $ touch Header.js Footer.js                  // 创建两个组件文件
           $ touch Header.js Footer.js                  // 创建两个组件文件       
           $ cd ../containers                           // 进入 containers 目录
       
     2. 下载 babel-preset-react --save-dev           // 解析jsx语法
           $ npm install babel-preset-react --save-dev  // 下载 babel-preset-react 解析 jsx 语法插件
       
     3. 创建一个 .babelrc 配置文件
           $ touch .babelrc
       
       - 编辑配置 .babelrc 文件
          ```
          {
            "presets": ["es2015", "react"]
          }
    
       

#### 课时8 8. 在webpack中加载css
     1. 在组件里添加样式 
        $ npm install style-loader css-loader --save-dev  // css 编译 加载 
        
     2. 配置 webpack.config.js 
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

     3. 下载 less 编译成css并加载
        $ npm install less less-loader --save-dev
        1. 配置 less
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
            
                    })
                ]
            }
            module.exports = config;       

        
        
### 课时9 9. 进行编写测试用例进行单元测试
    1. 下载  karma karma-chrome-launcher mocha karma-mocha 测试插件
       $ npm install karma karma-chrome-launcher mocha karma-mocha --save-dev
            karma                   // 在命令行里看到一种效果
            karma-chrome-launcher   // 在浏览器可以看到效果 
            mocha                   // 测试框架
            karma-mocha             // karma-mocha 适配的一个库
            
    2. 初始化 karma 配置文件 
       ./node_modules/.bin/karma init
       
       -1
        > jasmine  // 出现这时，我们可以用上下键选择 >mocha 
       
       -2 
        > no       // 直接回车
        
       -3 
        > Chrome  // 选择浏览器 回车
        >         // 回车
        
       -4 You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
        > test/**/*.spec.js   // 这里是说我们的测试文件放在什么位置，我们这里就输入 test， 放在这个test目录下，回车
        
       -5 02 07 2017 16:35:18.553:WARN [init]: There is no file matching this pattern.
         >         // 回车

       -6 
        You can use glob patterns, eg. "**/*.swp".
        >        // 这里提示，我要将哪些文件忽略掉，这里我们就直接回车
        
       -7
        > yes    // 直接回车
        
    3. 创建 测试目录
       $ mkdir test     // 创建测试目录
       $ cd test        // 进行 test 目录
       $ touch index.js // 创建测试文件及命令
       
       - 配置 package.json 测试文件
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
           "babel-preset-react": "^6.24.1",
           "css-loader": "^0.28.4",
           "html-webpack-plugin": "^2.29.0",
           "karma": "^1.7.0",
           "karma-chrome-launcher": "^2.2.0",
           "karma-mocha": "^1.3.0",
           "less": "^2.7.2",
           "less-loader": "^4.0.4",
           "mocha": "^3.4.2",
           "react": "^15.6.1",
           "react-dom": "^15.6.1",
           "style-loader": "^0.18.2",
           "webpack-dev-server": "^1.16.1"
         },
         "scripts": {
           "build": "webpack --progress --colors",
           "dev": "webpack-dev-server --progress",
           "test": "karma start"    // 测试文件
         },
         "keywords": [],
         "author": "",
         "license": "ISC"
       }
       

       
       
#### 0 10. 进行编写测试用例进行单元测试
     - 下载 karma-chai 插件
     $ npm install chai karma-chai --save-dev
     
     - 添加test/index.js 文件里的测试命令
     ```
         // 编写一些测试命令
         descript("Hello test", () => {
             if("test example", () => {
                 console.log("test");
             });
         
             // 创建一个 进行编写测试用例进行单元测试
             if("chai example", () => {
                 expect("hi").to.equal("hi");
             });
         
             if("chai test 3", () => {
                 throw new Errow("测试运行失败");
             });
         });     

     
####　课时11 11. 模块代码拆分    
   - 让开发人员写的代码保持一至
   - 下载安装 npm install eslint --save-dev
   - eslint 的使用
   - eslint 初始化
```javascript
    ./node_node_modules/./bin/eslint --init
    -1 
      > Answer questions about your style           // 选择些项 回车
    
    -2
     ? Are you using ECMAScript 6 features? (y/N)   // 是否会使用es6 选择 yes 回车
     
    -3
     ? Are you using ES6 modules? (y/N)             // 是否会使用es6 modules 选择 yes 

    -3 代码在什么地方去运行
      >(*) Browser                                  //  我们选择 Browser 浏览器里运行
      
    -4 
      ? Do you use CommonJS? (y/N)                  // 是否会使用 CommonJS 选择 y
    
    -5
      ? Do you use JSX? (y/N)                       // 是否会使用 JSX 选择 y
    
    -6
     ? Do you use React? (y/N)                      // 是否会使用 React 选择 y
    
    -7 ? What style of indentation do you use? (Use arrow keys)  
      > Tabs                                        // 缩进使用 Tabs 回车
        Spaces

    -8 ? What quotes do you use for strings? (Use arrow keys) 问你选择双引号还是单引号，
      > Double                                      // 这里选择 Double 双引号 回车
        Single
        
    -9 ? What line endings do you use? (Use arrow keys)
       > Unix                                      // 这里选择 Unix  回车
         Windows
         
    -10 
       ? Do you require semicolons? (Y/n)          // 是否会需要逗号 选择 y

    -11 ? What format do you want your config file to be in? (Use arrow keys)
        > JavaScript                               // 这里选择 JavaScript  回车
          YAML
          JSON
          
    - 这里就会自动去正是载
      ? What format do you want your config file to be in? JavaScript
      Installing eslint-plugin-react@latest, eslint@latest
      [    ..............] / fetchMetadata: verb afterAdd C:\Users\CHENGJINLEUNG\AppData\Roaming\npm-cach

     
    
    - 扫描 src 目录下的文件
      $ node_modules\.bin>eslint src/  
        
      $ node_modules\.bin>eslint --flx 自动在文件后面加上分号
```

#### 课时12 12. 打包完成后自动打开浏览器
   - 下载 open-browser-webpack-plugin
   ```javascript
    $ npm install open-browser-webpack-plugin --save-dev
    
```


#### 课时13 13. 在生产环境下压缩产出文件
     - 复制一份 webpack.config.js 文件，并做出压缩产出的文件来处理
     $ cp webpack.config.js webpack.config.prod.js 复制一份 prod 的文件
     
     - 配置 webpack.config.prod.js 文件
             var path = require('path');
             var webpack = require('webpack');
             var htmlWebpackPlugin = require("html-webpack-plugin");
             var openBrowserPlugin = require("open-browser-webpack-plugin");
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
                     })
                 ]
             }
             module.exports = config;    
     

     
     - 执行压缩
     $ webpack --config webpack.config.prod.js


#### 课时14 14. banner插件 
     1. banner插件 主要是给文件加上一些头部信息
         - 类似如下的样式：
           /*!
            * accepts
            * Copyright(c) 2014 Jonathan Ong
            * Copyright(c) 2015 Douglas Christopher Wilson
            * MIT Licensed
            */
        
     2. 配置 webpack.config.prod.js 文件
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
                     new webpack.BannerPlugin("作者：呈琛\n 日期:2017-7-2\n 协议：MIT")
                 ]
             }
             module.exports = config;
             
     3. 执行命令
       $ webpack --config webpack.config.prod.js
       - 最后再去看看 sit/bundle.js 的头部你就会发现有里面的说明了如下所示
           /*!
            * 作者：呈琛
            *  日期:2017-7-2
            *  协议：MIT
            *  版本号：0.2.1
            */
            

#### 课时15 15.提取文本插件
   - 解决多个 style样式加载到一个面上，此进并提出来
   - 未解决前如下所示        
            
           <head>
               <meta charset="UTF-8">
               <meta name="viewport" content="width=device-width, initial-scale=1.0">
               <meta http-equiv="X-UA-Compatible" content="ie=edge">
               <!--调用 html-webpack.plugin 模板插件的标题输出 -->
               <title>搭建前端工作流</title>
           <style type="text/css">.header{
               font-size:30px;
               color:blue;
           }</style><style type="text/css">.footer {
             color: red;
             font-size: 50px;
           }
           </style><style type="text/css">.app{
               background:lightpink;
           }</style></head>
           
   - 将Css单独加载
   
            $ npm install extract-text-webpack-plugin --save-dev
     
   - 1.配置的方法
   
            var ExtractTextPlugin = require("extract-text-webpack-plugin");
            module.exports = {
                module: {
                    loaders: [
                        {
                            test: /\.css$/,
                            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                        }
                    ]
                },
                plugins: [
                    new ExtractTextPlugin("style.css")
                ]
            }
            
            
   - 2.配置的方法 配置多个css如下  
            
           // nultiple extract instances
           
           let extractCSS = new ExtractTextPlugin("stylesheets/[name].css");
           
           let extractLess = new ExtractTextPlugin("stylesheets/[name].less");
           
           module.exports = {
                ....
                module: {
                    loaders: [
                        {
                            test: /\.scss$/i,
                            loader: extractCSS.extract(["css", "sass"]) 
                        },
                        {
                            test: /\.less$/i,
                            loader: extractLESS.extract(["css", "less"])
                        }               
                    ]            
                },
                ....
                plugins: [
                    extractCSS,
                    extractLESS
                    
                ]
           
           }
            
                
#### 课时16 16. 文件名增加hash值, 
   - 主要解决缓存的问题
   - hash 文件指纹
     - hash
     - chunkhash
     - contenthash
     
    // 给文件加上hash值，为了解决缓存的问题
     /**
      *
      *  filename: "bundle[hash].js"         // 增加一个hash值
      *  filename: "bundle[hash:6].js"       // 增加一个hash值为6位数
      *  filename: "bundle.[hash:6].js"      // 增加一个hash值为6位数
      *  filename: "bundle.js?[hash:6]"      // 增加一个hash值为6位数  推荐使用
      *  <script type="text/javascript" src="bundle.js?d4af16"></script></body>
      *
      *
      *
      *
      */
     // filename: "bundle[hash].js"
     filename: "bundle.js?[hash:6]"
     
     
     

        
        
     
        
     


        
        
    
