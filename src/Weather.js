import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Warsaw</h1>
      <div className="weather-details">
        <ul>
          <li>Sunday, 18/12/2022</li>
          <li>icon</li>
          <li>16°C|F</li>
          <li>humid: 70% wind: 2m/s</li>
          <li>Mostly cloudy</li>
        </ul>
      </div>
    </div>
  );
}
