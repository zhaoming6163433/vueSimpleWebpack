let path = require('path');
let webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: './main.js',
    output: {
        path: path.join(__dirname, 'dist'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    resolve: { alias: { 'vue': 'vue/dist/vue.js' } },
    plugins: [
        new VueLoaderPlugin()
    ]
};