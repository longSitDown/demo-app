import HtmlWebpackPlugin from 'html-webpack-plugin'
import { PROJECT_ROOT } from '../utils/constant'
import { resolve } from 'path'

export default [
    new HtmlWebpackPlugin({
        template: resolve(PROJECT_ROOT,'public/index.html'),
        inject:true   // 将script注入body下
    })
]