import React, { Component } from 'react';
import './App.css';
import LogoComponent from './logocomponent';
import logo from './logo.svg';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }  

  render() {
    return (
      <div className="App">
        <h1> Hello - Welcome to Your Account </h1>

        <header className="App-header">
          <LogoComponent />
        </header>

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

      </div>
    );
  }
}

export default App;
