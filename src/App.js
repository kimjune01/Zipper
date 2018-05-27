import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SmartyPants from './components/SmartyPants'
import Hand from './components/Hand'

class App extends Component {

  shittyAction = (event) => {
   this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br/>
        <br/>
        <SmartyPants/>
        <br/>
        <br/>
        <Hand/>
      </div>
    );
  }
}

export default App;
