const path = require('path')

module.exports = {
    entry: {app: './src/js/app.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}

