import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider } from '@tonconnect/ui-react';

WebApp.ready();
WebApp.enableClosingConfirmation()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TonConnectUIProvider 
  actionsConfiguration={{
    twaReturnUrl: 'https://t.me/BazzarBeloteBot'
  }} manifestUrl="https://bazzarbelote.github.io/belote/tonconnect-manifest.json">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TonConnectUIProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
