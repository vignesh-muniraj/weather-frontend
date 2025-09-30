import React, { useState } from "react";
import { TextField, Button, Box, Chip } from "@mui/material";

export default function WeatherSearch({ fetchWeather, lastCities }) {
  const [city, setCity] = useState("");

  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        label="Enter City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ ml: 2 }}
        onClick={() => {
          fetchWeather(city);
          setCity("");
        }}
      >
        Search
      </Button>

      <Box sx={{ mt: 2 }}>
        {lastCities.map((c, idx) => (
          <Chip
            key={idx}
            label={c}
            sx={{ mr: 1, mb: 1 }}
            onClick={() => fetchWeather(c)}
          />
        ))}
      </Box>
    </Box>
  );
}
