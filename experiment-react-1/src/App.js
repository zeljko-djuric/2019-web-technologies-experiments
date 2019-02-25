import React, { Component } from 'react';
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
      <div>
        <li>
        {bone.material}
        </li>
        {bone.slashs_notes}
      </div>
      
    ))
    return (
      <div className="App">
      <h1>Astrid's bone list</h1>
        <ul>
          {bones}
        </ul>
      <h1>Make Astrid happy and create a new bone</h1>
      <div>
        <p>Material</p>
        <input type="text"></input>
      </div>
      <div>
        <p>What dog think about it</p>
        <input type="text"></input>
      </div>
      <div>
        <p>Age</p>
        <input type="text"></input>
      </div>
      <div>
        <p>Size</p>
      <input type="text"></input>
      </div>
      <button type="button">Save bone</button>
      </div>
    );
  }
}

export default App;
