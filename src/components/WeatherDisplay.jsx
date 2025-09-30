import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function WeatherDisplay({ data }) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h5">{data.city}</Typography>
        <Typography>Temperature: {data.temperature}°C</Typography>
        <Typography>Humidity: {data.humidity}%</Typography>
        <Typography>Condition: {data.condition}</Typography>
      </CardContent>
    </Card>
  );
}
