import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(args){
    super(args);
    this.state = {
      bones: [],
      material: '',
      description: '',
      age: 0,
      size: 0
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

  updateMaterial = (event) => {
    this.setState({material: event.target.value})
  }

  updateDescription = (event) => {
    this.setState({description: event.target.value})
  }

  updateAge = (event) => {
    this.setState({age: event.targe.value})
  }

  updateSize = (event) => {
    this.setState({size: event.target.value})
  }

  saveBone = () =>{
    console.log('test')
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
        <input type="text" onChange={this.updateMaterial}></input>
      </div>
      <div>
        <p>What dog think about it</p>
        <input type="text" onChange={this.updateDescription}></input>
      </div>
      <div>
        <p>Age</p>
        <input type="text" onChange={this.updateAge}></input>
      </div>
      <div>
        <p>Size</p>
      <input type="text" onChange={this.updateSize}></input>
      </div>
      <button type="button" onClick={this.saveBone}>Save bone</button>
      </div>
    );
  }
}

export default App;
