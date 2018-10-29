# learn_webpack
webpack
# webpack介绍
- code splitting
- [官网](https://webpack.github.io)

# 建立项目的webpack配置文件

### 1.webpack安装

- 新建一个文件并进入 
  - mkdir webpack-test
  - cd webpack-test
- npm初始化
  - npm init --> package.json
- 安装webpack
  - npm install webpack -g(全局安装)
  - npm install webpack --save-dev 
  - npm install webpack-cli(webpack4) 


### 2.打包文件
###### 打包命令
- webpack main.js main.bundle.js（webpack4以下）
- webpack main.js -o main.bundle.js
###### Loader下载
- npm install css-loader --save-dev
- npm install style-loader --save-dev
- 引入loader
   - 在js文件里 require("style-loader!css-loader!./main.css")
   - 模块绑定 webpack main.js main.bundle.js --module-bind"css=style-loader!css-loader"

### 3.新建项目需要的文件
- mkdir src
  - mkdir style
     - less
     - sass
  - mkdir script
     - main.js(自动生成)
         ```
         function hello(){}
         ```
  - index.html(嵌入打包的bundle.js)
  - webpack.config.js(配置文件)
      ```
      module.exports={
          entry:"./src/script/main.js",
          output:{
              path:"./dist/js",
              filename:"bundle.js"
          }
      }
      ```
- node_modules(自动生成)
- mkdir dist
  - js
     - bundle.js(自动生成)
###### 文件目录
- node_modules
- package.json
- assets(图片)
- src
   - css
      - common.css
      ```
      html,body{
          padding:0;
          margin:0;
          backgroung-color:red;
      }
      ```
   - app.js
   ```
   import "./css/common.css";
   const App=function(){
       const num = 1;
       alert(num);
   }
   new App();
   ```
- dist
- script
  - main.js
- index.html
- webpack.config.js


### 4.插件（html-webpaack-plugin）
webpack.config.js
```
- var hwp=require("html-webpaack-plugin");
- module.exports={
    entry:{
        main:"./main.js"
    },
    output:{
        path:"./dist",
        filename:"js[name].js"
    },
    plugins:{
        new hwp({
            template:"index.html",
            inject:false,
            title:"webpack is good",
            date:new Date(),
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
        })
    }
}
```
index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><%= hwp.options.title %></title>
</head>
<body>
    <div><%= hwp.options.date %></div>
	<script type="text/javascript" src="hello.bundle.js"></script>
</body>
</html>
```
### 5.babel-loader转换es6语法为浏览器可解析的js
- 配置文件
```
   module.exports={
    entry:{
        main:"./main.js"
    },
    output:{
        path:"./dist",
        filename:"js[name].js"
    },
    module:{
        loaders[{
            test:/\.js$/,
            loader:"babel",
            include:path.resolve(__dirname,"src"),
            exclude:path.resolve(__dirname,"node_modules/"), 
            query:{
                presets:["latest"]
            }
        }]

    }
    plugins:{
        new hwp({
            template:"index.html",
            inject:false,
            date:new Date()
        })
    }
}
```
- 命令行
  - npm install --save-dev babel-preset-latest
  - npm run webpack

### 6.处理项目中的css文件
webapck.config.js 中module的loaders中添加
```
 module:{
        loaders[
         {
            test:/\.css$/,
            loader:"style-loader!css-loader"
         }
        ]
    }
```
统一添加浏览器的私有前缀

- npm install postcss-loader --save-dev 
- npm install autoprefixer --save-dev(postcss插件 浏览器前缀)
- webapck.config.js 中module的loaders中添加
```
 module:{
        loaders[
         {
            test:/\.css$/,
            loader:"style-loader!css-loader!postcss-loader"
         }
        ]
    },
postcss:[
    require("autoprefixer")({
        broswers:["last 5 versions"]
    })
]
```
- 对@import的处理
   - loader:"style-loader!css-loader?importLoaders=1!postcss-loader"
- 处理.less文件
   - npm instsll less-loader --save-dev
   - webpack.config.js
   ```
    {
       test:/\.less$/,
        loader:"style!css!postcss!less"
     }
     ```
- 处理.scss文件
   - npm instsll sass-loader --save-dev
   - webpack.config.js
   ```
    {
       test:/\.scss$/,
        loader:"style!css!postcss!sass"
     }
     ```
- 处理模板文件
- 选择相应的模板
   - npm instsll html-loader --save-dev
   - webpack.config.js
   ```
    {
       test:/\.html$/,
        loader:"html-loader"
     }
     ```
- 处理图片文件
  - file-loader
       - 图片
           - npm instsll file-loader --save-dev
           - webpack.config.js
           ```
            {
               test:/\.(png|jpg|gif|svg)$/i,
               loader:"file-loader"
             }
            ```
       - 组件下的图片（相对路径）
            ```
            <img src="${ require(相对路径) }"/>
            ```
            - npm instsll file-loader --save-dev
            - webpack.config.js
            ```
            {
             test:/\.(png|jpg|gif|svg)$/i,
             loader:"file-loader",
             query:{
                 name:"assets/[name]-1.[ext]"
             }
            }
            ```  
  - url-loader
       - npm instsll url-loader --save-dev
       - webpack.config.js
           ```
            {
               test:/\.(png|jpg|gif|svg)$/i,
               loader:"url-loader",
               query:{
                 limit:2000,
                 name:"assets/[name]-1.[ext]"
               }
            }
            ```
  - image-webpack-loader
       - npm instsll image-webpack-loader --save-dev
       - webpack.config.js
           ```
            {
               test:/\.(png|jpg|gif|svg)$/i,
               loaders:[
                   "url-loader?limit=2000&name="assets/[name]-1.[ext],
                   "image-webpack"
            }
            ```