import React from 'react'
import './WeatherApp.css'
import search_icon from "../assets/search.png"
/*import clear_icon from "../assets/clear.png"
import drizzle_icon from "../assets/drizzle.png"
import rain_icon from "../assets/rain.png"
import snow_icon from "../assets/snow.png"*/
import wind_icon from "../assets/wind.png"
import humidity_icon from "../assets/humidity.png"
import cloud_icon from "../assets/cloud.png"


export const WeatherApp = () => {
    const api_key = "8ecc5ea5ca6f21bfca26df5b8f1e0232";

    const search = async() => {
       const e = document.getElementsByClassName("cityInput");
       if(e[0].value ===""){
          return 0;
       }
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${e[0].value}London&units=Metric&&appid=${api_key}`;
       
       let response = await fetch(url);
       let data = await response.json();
       
       document.querySelector("wind-rate").innerHTML = data.wind.speed+" km/h";
       document.querySelector("weather-temp").innerHTML = data.main.temp+"°c";
       document.querySelector("weather-location").innerHTML = data.name;
       document.querySelector("humidity-percent").innerHTML = data.main.humidity+" %";

    }

  return (
    <div className="container">
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='search' />
            <div className="search-icon" onClick={() => {search()}}>
                <img src={search_icon} alt="" className="icon"/>
            </div>
        </div>
        <div className="weather-image">
                <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">24°c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate">18km/hr</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}
