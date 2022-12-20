import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="weather-details">
        <ul className="weather-date mb-0">
          <li className="mb-3">
            <FormattedDate date={props.data.date} />
          </li>
          <li>
            {/* <img src={props.data.iconUrl} alt={props.data.description} /> */}
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
            <span className="mx-1 temperature">{props.data.temperature}</span>
            <span className="unit">°C</span>
          </li>
          <li>
            humidity: {props.data.humidity}% | wind:{" "}
            {Math.round(props.data.wind)}m/s
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
    </div>
  );
}
