
import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import WeatherSearch from "../components/WeatherSearch";
import WeatherDisplay from "../components/WeatherDisplay";
import TemperatureChart from "../components/TemperatureChart";
import { API_BASE } from "../Global";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [lastCities, setLastCities] = useState([]);
  const [temperatureHistory, setTemperatureHistory] = useState([]);

  useEffect(() => {
    const fetchLastCities = async () => {
      try {
        const res = await fetch(`${API_BASE}/last-cities`);
        const data = await res.json();
        setLastCities(data);
      } catch (err) {
        console.error("Failed to fetch last cities:", err);
      }
    };
    fetchLastCities();
  }, []);

  const fetchWeather = async (city) => {
    if (!city) return;

    try {
      const res = await fetch(`${API_BASE}/weather?city=${city}`);
      const data = await res.json();

      if (data.error) {
        console.error(data.error);
        return;
      }

      setWeatherData(data);

      const lastRes = await fetch(`${API_BASE}/last-cities`);
      const lastData = await lastRes.json();
      setLastCities(lastData);

      setTemperatureHistory((prev) => {
        const newEntry = { city: data.city, temp: data.temperature };
        const updated = [...prev, newEntry];
        return updated;
        // return updated.slice(-5);
      });
    } catch (err) {
      console.error("Failed to fetch weather:", err);
    }
  };

  return (
    <Container sx={{ mt: 2 }}>
      <WeatherSearch fetchWeather={fetchWeather} lastCities={lastCities} />
      {weatherData && <WeatherDisplay data={weatherData} />}
      <TemperatureChart history={temperatureHistory} />
      </Container>
    );
  }
  
