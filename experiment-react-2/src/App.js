import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(args){
    super(args);
    this.state = {
      city: '',
      temp: 0,
      temp_min: 0,
      temp_max: 0,
      icon_code: '',
      weather: '',
      weather_description: ''
    }
  }

  componentDidMount(){
    this.getWeather()
  }

  getWeather = () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1e0178e320afb8023ce608acbcfea97c')
      .then(raw_data => raw_data.json()).then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
