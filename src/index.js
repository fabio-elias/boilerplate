'use strict'
import App from './app'
import React from 'react'
import { render} from 'react-dom'
import { AppContainer } from 'react-hot-loader'

const renderApp = (NextApp) => {
    render(
        <AppContainer>
            <NextApp />
        </AppContainer>,
        document.querySelector('[data-js="app"]')
    )
}

renderApp(App)

// Verifica se está em dev e com o hot loader habilitado
if (module.hot) {
    console.log('Existe')
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default // O nextapp vai ser a próxima atualização do app. É preciso fazer o require porque não pode utilizar o import no meio do arquivo
        renderApp(NextApp)
    }) // Primeiro parametro vai receber a entrada da aplicação (arquivo principal) que vai ser atulizado ou ter outros components atualizados
}