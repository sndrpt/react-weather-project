import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function ForecastDay(props) {
  function day() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <li>
        <WeatherIcon size={30} code={props.data.condition.icon} />
        <span className="forecast-temperature">
          <strong>{Math.round(props.data.temperature.maximum)}°</strong>{" "}
          {Math.round(props.data.temperature.minimum)}°
        </span>
        <span className="forecast-day"> {day()}</span>
      </li>
    </div>
  );
}
