const { resolve } = require('path')



module.exports = [
    {
        test: /\.(tsx?|js)$/,
        include: resolve('src'),
        use: [
            {
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: ['@babel/preset-typescript', '@babel/preset-react'],
                    plugins: [
                        ['import', { 
                            libraryName: 'antd', 
                            libraryDirectory: 'es', 
                            style: true
                        }],
                        ['@babel/plugin-proposal-class-properties', { loose: true }],
                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                        '@babel/plugin-syntax-dynamic-import',
                    ],
                },
            }
        ],
    },
]