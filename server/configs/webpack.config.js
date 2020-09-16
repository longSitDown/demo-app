const {resolve} = require('path')
const { PROJECT_NAME, PROJECT_ROOT } =require('../utils/constant') 
const jsrules =require('../rules/jsrules') 
const stylerules =require('../rules/stylerules') 
const pligins =require('./pligins') 

/**
 * @type {import('webpack').Configuration}
 */
module.exports ={
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
        rules: [...jsrules,...stylerules]
    },
    plugins: [...pligins]
    
}
