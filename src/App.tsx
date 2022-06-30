import logo from './logo.svg';
import './App.css';

import * as React from 'react';

import SpeedDial from '@mui/material/SpeedDial';
import HelpIcon from '@mui/icons-material/Help';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: 'absolute', bottom: 100, right: 16 }}
      icon={<HelpIcon />}
      ></SpeedDial>
    </div>
  );
}

export default App;
