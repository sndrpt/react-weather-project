import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let city = props.data.city;
  const apiKey = "9680t975994o0f740a177548a039f54b";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <ul className="forecast-days">
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
