module.exports = {
    entry: "./script.js",// точка входа

    output: { 
        filename: "build.js" // собраный файл 
    },

    watch: true, //нонстопно вочить

    watchOptions:{
    	aggregateTimeout: 100 // ускоряю сборку (по дефолту 300)
    },

     //для дебага в хроме
    //devtool: "source-map"// (Для релиза) Показывает в каком файле функция
    // devtool: "inline-source-map"// Показывает в каком файле функция + мапы записуются внутрь билда 
     //devtool: "cheap-inline-module-source-map"// Показывает в каком файле функция + мапы записуются внутрь билда + без учета позиции внутри строки (билд чучуть менше)
     devtool: "eval" // (Для этапа розработки )
};