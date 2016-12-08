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
        // console.log(this.weatherList);
        this.setState({data: responseJson.list[0].weather[0].description});
      })
      .catch((error) => {
        // console.error(error);
      });
  }
  render() {
    let weatherDaily = this.weatherList.slice(0, config.forecastTotalDays*8).map((dayNum, index) => {
      const windDirectionPointerStyle = {display: 'inline-block', transform: 'rotate(' + dayNum.wind.deg + 'deg)'};
      return <li key={index}>
          <div className="date">{dayNum.dt_txt.substring(5, 16)}</div>
          <div className="description">{dayNum.weather[0].description}</div>
          <div className="temp">{Math.round(dayNum.main.temp - 273.15)}&deg;C</div>
          <div className="wind">Wind: {Math.round(dayNum.wind.speed)}m/sec  <span style={windDirectionPointerStyle}>&uarr;</span></div>
        </li>;
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
