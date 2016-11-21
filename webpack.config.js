/*module.exports = {
    entry: "./script.js",// точка входа

    output: { 
        filename: "build.js" // собраный файл 
    },

    //watch: true, 

    watchOptions:{
    	aggregateTimeout: 100 
    },

    module:{
        loaders:[
           {
             test:/\.css$/,
             loader:'style!css'  //inline
           }
        ]
    }
    
};*/



var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./script.js",// точка входа

    output: { 
        filename: "build.js" // собраный файл 
    },

    //watch: true, 

    watchOptions:{
        aggregateTimeout: 100 
    },

    module:{
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader", "less-loader") }
        ]
    },
    plugins: [
        new ExtractTextPlugin("build.css")
    ]
    
};