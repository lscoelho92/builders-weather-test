import React from "react";

import "../styles/weather-card.scss";

function WeatherCard({ data }) {
  // console.log(data);

  const dateBuilder = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = weekDays[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div className="weather-card">
      <div className="location-box">
        <p className="location">
          {data.name}, {data.sys.country}
        </p>
        <span className="date">{dateBuilder(new Date())}</span>
      </div>
      <div className="weather-box">
        <span className="temperature">{Math.round(data.main.temp)}</span>
        <p className="description">{data.weather[0].description}</p>
        <div className="detailed-temp">
          <p>Min.: {Math.round(data.main.temp_min)}&deg;</p>
          <p>Max.: {Math.round(data.main.temp_max)}&deg;</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
