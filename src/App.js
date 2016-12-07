import React, { Component } from 'react';
import * as config from './config';
import Weather from './Weather';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{config.forecastTotalDays}-day weather forecast for {config.cityName}, {config.countryCode.toUpperCase()}</h1>
        </div>
        <Weather />
      </div>
    );
  }
}

export default App;
