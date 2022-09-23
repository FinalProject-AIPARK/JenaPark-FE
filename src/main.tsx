import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import background from '/background.png';

const GlobalStyle = createGlobalStyle`
${reset}
body {
font-family: 'Noto Sans KR', 'Roboto', sans-serif;
background-image: url(${background});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
}
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </BrowserRouter>,
);
