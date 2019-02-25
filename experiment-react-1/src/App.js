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

    const bones = this.state.bones.map(bone => (
      <li>
        {bone.material}
      </li>
    ))
    return (
      <div className="App">
        <ul>
          {bones}
        </ul>
      </div>
    );
  }
}

export default App;
