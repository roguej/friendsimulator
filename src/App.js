import logo from './logo.svg';
import './App.css';
import { ReactComponent } from '*.svg';
import React from 'react';
import { Profile } from './Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile name="Willard Mumfrey" />
      </header>
    </div>
  );
}

export default App;
