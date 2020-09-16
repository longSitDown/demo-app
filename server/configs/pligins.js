const HtmlWebpackPlugin = require('html-webpack-plugin')
const { PROJECT_ROOT } = require('../utils/constant')
const path = require('path')

module.exports = [
    new HtmlWebpackPlugin({
        template:path.resolve(PROJECT_ROOT,'public/index.html'),
        inject:true   // 将script注入body下
    })
]