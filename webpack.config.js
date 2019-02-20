const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    performance: { hints: false },
    devtool: 'source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index')

    ],
    output: { 
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: /src/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    }
}