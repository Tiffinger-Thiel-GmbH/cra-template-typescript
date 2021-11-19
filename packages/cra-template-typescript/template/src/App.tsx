import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {
  headline: React.ReactNode;
}

const App: React.FC<Props> = ({ headline }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{headline}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
