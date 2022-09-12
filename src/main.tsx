import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'	

const GlobalStyle = createGlobalStyle`
${reset}
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
  </BrowserRouter>
)
