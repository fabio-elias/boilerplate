'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    performance: { hints: false },
    devtool: 'source-map', // Serve para debugar. Lembrando que o index precisa utilizar o STATIC
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index')  // Aqui usa o index.js (PS: Obrigatoriamente precisa ser .js)

    ],
    output: { 
        path: path.join(__dirname, 'dist'), // Define o caminho
        filename: 'bundle.js', // Da um nome para o arquivo (que será utilizado no index.html)
        publicPath: '/static/'
        // o local onde o WP dev server vai ficar assistindo nosso arquivo de desenvolvimento. Não gera um arquivo fisico e sim um virtual em memoria e o publicPath diz onde o arquivo vai ficar.
        // esse diretorio static, se olharmos na estrutura do projeto, não existe, apenas está em memória e sendo utilizado no index.html

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/, // faz o teste lógico de arquivo
                exclude: /node_modules/, //excluir a pasta de node_modules, pois é 3rd party
                include: /src/, // manda verificar tudo que termina com .js dentro da pasta src
                use: ['babel-loader', 'eslint-loader'] // usando como loader, o babel loader que foi instalado via npm
            }
        ]
    }
}