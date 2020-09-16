const { PROJECT_NAME, PROJECT_ROOT, RESOLVE } = require('../utils/constant')
const jsrules = require('../rules/jsrules')
const stylerules = require('../rules/stylerules')
const pligins = require('./pligins')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    entry: {
        app: RESOLVE('src/index.tsx')
    },
    output: {
        publicPath: '/',
        path: RESOLVE('./dist'),
        filename: 'js/[name]-[hash].bundle.js',
        hashSalt: PROJECT_NAME
    },
    module: {
        rules: [...jsrules, ...stylerules]
    },
    plugins: [...pligins]

}
