import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import { Rings } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      date: "Sunday, 18/12/2022",
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Find your city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn px-4" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <div className="weather-details">
          <ul className="weather-date mb-0">
            <li className="mb-3">{weatherData.date}</li>
            <li>
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <ReactAnimatedWeather
                icon="CLOUDY"
                color="#fff"
                size={120}
                animate={true}
              />
            </li>
          </ul>
          <ul className="weather-data">
            <li className="mb-3">
              <span className="mx-1 temperature">
                {weatherData.temperature}
              </span>
              <span className="unit">°C</span>
            </li>
            <li>
              humidity: {weatherData.humidity}% | wind:{" "}
              {Math.round(weatherData.wind)}m/s
            </li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    const apiKey = "9680t975994o0f740a177548a039f54b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="d-flex justify-content-center">
        <Rings
          height="500"
          width="500"
          color="rgba(255, 255, 255, 0.4)"
          radius="6"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={true}
          ariaLabel="rings-loading"
        />
      </div>
    );
  }
}
