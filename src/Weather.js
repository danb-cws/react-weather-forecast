import React, { Component } from 'react';
import 'whatwg-fetch';
import * as config from './config';
import './App.css';

class Weather extends Component {

  weatherList = [];

  constructor(props){
      super(props);
      this.state = {
          data: ''
      };
  }

  componentDidMount() {
    fetch(config.apiUrl)
      .then(response => response.json())
      .then(responseJson => {
        this.weatherList = responseJson.list;
        this.setState({data: responseJson.list[0].weather[0].description});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    let weatherDaily = this.weatherList.slice(0, config.forecastTotalDays).map((dayNum, index) => {
      return <li key={index}>Day {++index}: {dayNum.weather[0].description}</li>;
    });
    return (
      <ul className="App-forecast">
        {weatherDaily}
        {/*forecast data: {this.state.data}*/}
      </ul>
    );
  }
}

export default Weather;
