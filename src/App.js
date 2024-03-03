import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import WebApp from '@twa-dev/sdk';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';

function App() {
  const wallet = useTonWallet();
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: WebApp.headerColor}}>
        <div className='Profile-Picture' style={{backgroundImage: 'url("https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/08/bored_ape_yacht_club.jpeg-1.jpg")'}}></div>
        <TonConnectButton />
      </header>
      {wallet && 
            <div>
                <span style={{color:'red'}}>Connected wallet: {wallet.name}</span>
                <span style={{color:'red'}}>Device: {wallet.device.appName}</span>
            </div>
      }
    </div>
  );
}

export default App;
