import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

export default function App() {

  console.log('Hallo Welt')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          Das ist eine coole App von uns. Weiter Infos gibt est auf
          Github oder unter der Website on Techstarter. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Klick hier um zur Techstarter-Website zu gelangen. 
        </a>
      </header>
      <Card />
    </div>
  );
}

//export default App;
