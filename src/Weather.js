import React from "react";
import axios from "axios";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  const apiKey = "9680t975994o0f740a177548a039f54b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}`;
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn px-4" />
          </div>
        </div>
      </form>
      <h1>Warsaw</h1>
      <div className="weather-details">
        <ul className="weather-date mb-0">
          <li className="mb-3">Sunday, 18/12/2022</li>
          <li>
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="#fff"
              size="120"
              animate="true"
            />
          </li>
        </ul>
        <ul className="weather-data">
          <li>
            <span className="mx-1 temperature">16</span>
            <span className="unit">°C</span>
          </li>
          <li>humid: 70% wind: 2m/s</li>
          <li>Mostly cloudy</li>
        </ul>
      </div>
    </div>
  );
}
