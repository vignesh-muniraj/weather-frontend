import React, { useState } from "react";
import { Container } from "@mui/material";
import WeatherSearch from "../components/WeatherSearch";
import WeatherDisplay from "../components/WeatherDisplay";
import TemperatureChart from "../components/TemperatureChart";
import { API_BASE } from "../Global";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [lastCities, setLastCities] = useState([]);
  const [temperatureHistory, setTemperatureHistory] = useState([]);

  const fetchWeather = async (city) => {
    try {
      const res = await fetch(`${API_BASE}/weather?city=${city}`);
      const data = await res.json();
      setWeatherData(data);

      const lastRes = await fetch(`${API_BASE}/last-cities`);
      const lastData = await lastRes.json();
      setLastCities(lastData);

      setTemperatureHistory((prev) => [
        ...prev.slice(-4),
        { city, temp: data.temperature },
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container sx={{ mt: 2 }}>
      <WeatherSearch fetchWeather={fetchWeather} lastCities={lastCities} />
      {weatherData && <WeatherDisplay data={weatherData} />}
      {temperatureHistory.length > 0 && (
        <TemperatureChart history={temperatureHistory} />
      )}
    </Container>
  );
}
