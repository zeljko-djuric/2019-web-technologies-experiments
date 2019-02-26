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

  handleUpdate = (event) =>{
    this.setState({[event.target.id]: event.target.value})
  }

  // updateMaterial = (event) => {
  //   this.setState({material: event.target.value})
  // }

  // updateDescription = (event) => {
  //   this.setState({description: event.target.value})
  // }

  // updateAge = (event) => {
  //   this.setState({age: event.target.value})
  // }

  // updateSize = (event) => {
  //   this.setState({size: event.target.value})
  // }

  saveBone = () =>{

    fetch('https://slashtheapidog.com/api/bones/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "age": this.state.age,
        "material": this.state.material,
        "size":this.state.size,
        "remainder": "80%",
        "slashs_notes": this.state.description
      })
    }).then(function(response) {
      console.log(response.status)
    })
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
      <h1>Astrid bone list</h1>
        <ul>
          {bones}
        </ul>
      <h1>Make Astrid happy and create a new bone</h1>
      <div>
        <p>Material</p>
        <input type="text" id="material" onChange={this.handleUpdate}></input>
      </div>
      <div>
        <p>What dog think about it</p>
        <input type="text" id="description" onChange={this.handleUpdate}></input>
      </div>
      <div>
        <p>Age</p>
        <input type="text" id="age" onChange={this.handleUpdate}></input>
      </div>
      <div>
        <p>Size</p>
      <input type="text" id="size" onChange={this.handleUpdate}></input>
      </div>
      <button type="button" onClick={this.saveBone}>Save bone</button>
      </div>
    );
  }
}

export default App;
