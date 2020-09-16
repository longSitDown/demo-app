const { resolve } = require('path')

module.exports = [
    {
        test: /\.less$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options:{
                    modules:true
                }
            },
            {
                loader: 'less-loader',
            }
        ],
        
        exclude: /node_modules/,
    },
]