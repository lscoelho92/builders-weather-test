import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import WeatherCard from "../components/WeatherCard";

import { getUserCoords } from "../commons/location";

import "../styles/home.scss";

function Home() {
  const [weather, setWeather] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const apiData = await getUserCoords();
      setWeather({ ...apiData });
      setShowResult(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const refreshClick = async () => {
    setLoading(true);
    try {
      const apiData = await getUserCoords();
      setWeather({ ...apiData });
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="HomePage">
      {!showResult ? (
        <div className="initial-content">
          <h1 className="text-primary">WAO - What About Outside?</h1>
          <h2 className="subTitle">Discover climate data for your region.</h2>
          <Button onClick={() => handleClick()} loading={loading}>
            Let's Start!
          </Button>
          {error && (
            <p className="error-text">
              Unfortunately we were unable to find your location data. Make sure
              we have access to your browser location and if the error persists,
              try again later.
            </p>
          )}
        </div>
      ) : (
        <div className="result-content">
          <WeatherCard data={weather} />
          <Button onClick={() => refreshClick()} loading={loading}>
            Refresh data
          </Button>
          {error && (
            <p className="error-text">
              Unfortunately we were unable to find your location data. Make sure
              we have access to your browser location and if the error persists,
              try again later.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
