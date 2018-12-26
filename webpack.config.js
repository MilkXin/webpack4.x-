const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')  //导入在内存中自动生成index页面的插件

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname,'./src/index.html'),//源文件
    filename: 'index.html'//生成的内存中首页名称
})


module.exports = {
    mode: "development",//development开发环境，production生产环境，代码会自动压缩
    plugins:[
        htmlPlugin
    ]
}