import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <ul className="forecast-days">
        <li>
          <WeatherIcon size={30} code="clear-sky-day" />
          Monday
        </li>
        <li>
          <WeatherIcon size={30} code="clear-sky-day" />
          Tuesday
        </li>
        <li>
          <WeatherIcon size={30} code="clear-sky-day" />
          Wednesday
        </li>
        <li>
          <WeatherIcon size={30} code="clear-sky-day" />
          Thursday
        </li>
        <li>
          <WeatherIcon size={30} code="clear-sky-day" />
          <span className="forecast-temperature">
            <strong>6°</strong> 5°
          </span>
          <span className="forecast-day"> Friday</span>
        </li>
      </ul>
    </div>
  );
}
