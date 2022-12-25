import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";

import axios from "axios";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Forecast">
        <ul>
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </ul>
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
