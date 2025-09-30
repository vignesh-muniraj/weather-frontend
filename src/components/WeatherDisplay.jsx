import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny"; 
import OpacityIcon from "@mui/icons-material/Opacity"; 
import ThermostatIcon from "@mui/icons-material/Thermostat"; 
import CloudIcon from "@mui/icons-material/Cloud"; 
import ThunderstormIcon from "@mui/icons-material/Thunderstorm"; 
import AcUnitIcon from "@mui/icons-material/AcUnit"; 

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

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Box display="flex" alignItems="center">
            <ThermostatIcon color="error" sx={{ mr: 1 }} />
            <Typography>{data.temperature}°C</Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <OpacityIcon color="primary" sx={{ mr: 1 }} />
            <Typography>{data.humidity}%</Typography>
          </Box>

          <Box display="flex" alignItems="center">
            {getConditionIcon(data.condition)}
            <Typography sx={{ ml: 1 }}>{data.condition}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
