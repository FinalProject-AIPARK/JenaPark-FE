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
import { CookiesProvider } from 'react-cookie';

const GlobalStyle = createGlobalStyle`
${reset}
body {
  font-size: 1rem;
  font-family: 'Noto Sans KR', 'Roboto', sans-serif;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
button {
  cursor: pointer;
}
input {
  background-color: transparent;
  border: none;
  font-size: 1rem;
  :focus {
    outline: none;
  }
}
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CookiesProvider>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </CookiesProvider>,
);
