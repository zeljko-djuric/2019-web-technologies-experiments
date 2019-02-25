import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(args){
    super(args);
    this.state = {
      bones: []
    }
  }

  componentDidMount(){
    this.getBones()
  }

  getBones = () => {
    fetch('https://slashtheapidog.com/api/bones/').then(raw_data => raw_data.json()
      .then(data => {
        this.setState({bones: data.data})
        console.log(data.data)
      }))
  }

  render() {
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
}

export default App;
