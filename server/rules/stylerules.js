const { RESOLVE } = require('../utils/constant')


module.exports = [
    {
        test: /\.(c|le)ss$/,
        exclude:/src/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
            },
            {
                loader: 'less-loader',
                options: {
                    lessOptions:{
                        importLoaders:1,
                        javascriptEnabled:true
                    }
                }
            }
        ],

    },
    {
        test: /\.less$/,
        use: [
            'style-loader',
            'css-modules-typescript-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName:"[local]__[hash:base64:10]"
                    }
                }
            },
            {
                loader: 'less-loader',
                options: {
                    lessOptions:{
                        includePaths: [
                            RESOLVE('server')
                        ],
                        javascriptEnabled:true
                    }
                }
            }
        ],
        exclude:/node_modules/,
    },
]