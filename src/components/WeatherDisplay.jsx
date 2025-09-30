import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // For sunny condition
import OpacityIcon from "@mui/icons-material/Opacity"; // For humidity
import ThermostatIcon from "@mui/icons-material/Thermostat"; // For temperature
import CloudIcon from "@mui/icons-material/Cloud"; // For cloudy
import ThunderstormIcon from "@mui/icons-material/Thunderstorm"; // For thunderstorm
import AcUnitIcon from "@mui/icons-material/AcUnit"; // For snow

export default function WeatherDisplay({ data }) {
  const getConditionIcon = (condition) => {
    if (!condition) return <CloudIcon color="action" />;
    const lower = condition.toLowerCase();
    if (lower.includes("sun")) return <WbSunnyIcon color="warning" />;
    if (lower.includes("cloud")) return <CloudIcon color="action" />;
    if (lower.includes("storm")) return <ThunderstormIcon color="primary" />;
    if (lower.includes("snow")) return <AcUnitIcon color="info" />;
    return <WbSunnyIcon color="disabled" />;
  };

  return (
    <Card sx={{ mb: 3, p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {data.city}
        </Typography>

        {/* 3 items in a row */}
        <Box display="flex" justifyContent="space-between" mt={2}>
          {/* Temperature */}
          <Box display="flex" alignItems="center">
            <ThermostatIcon color="error" sx={{ mr: 1 }} />
            <Typography>{data.temperature}°C</Typography>
          </Box>

          {/* Humidity */}
          <Box display="flex" alignItems="center">
            <OpacityIcon color="primary" sx={{ mr: 1 }} />
            <Typography>{data.humidity}%</Typography>
          </Box>

          {/* Condition */}
          <Box display="flex" alignItems="center">
            {getConditionIcon(data.condition)}
            <Typography sx={{ ml: 1 }}>{data.condition}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
