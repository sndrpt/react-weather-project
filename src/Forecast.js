import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";

import axios from "axios";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    console.log(forecast);
    return (
      <div className="Forecast">
        <ForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    let city = props.data.city;
    const apiKey = "9680t975994o0f740a177548a039f54b";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
