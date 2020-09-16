import { Configuration } from 'webpack'
import { resolve } from 'path'
import { PROJECT_NAME, PROJECT_ROOT } from '../utils/constant'
import jsrules from '../rules/jsrules'
import pligins from './pligins'

// js 加 @type {import('webpack').Configuration} 会有提示

const commonConfig: Configuration = {
    entry: {
        app: resolve(PROJECT_ROOT, 'src/index.tsx')
    },
    output: {
        publicPath: '/',
        path: resolve(PROJECT_ROOT, './dist'),
        filename: 'js/[name]-[hash].bundle.js',
        hashSalt: PROJECT_NAME
    },
    module: {
        rules: [...jsrules]
    },
    plugins: [...pligins]
}

export default commonConfig