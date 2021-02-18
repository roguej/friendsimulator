import logo from './logo.svg';
import './App.css';
import { ReactComponent } from '*.svg';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

class Profile extends React.Component{
    render(){
        <div>
            <div className="profile-picture"></div>
            <div className="profile-body">
                <h2></h2>
                <h3></h3>
                
            </div>
        </div>
    }
}

export default App;
