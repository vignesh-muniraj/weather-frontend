import React from "react";
import { Line } from "react-chartjs-2";
import { Card, CardContent } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function TemperatureChart({ history }) {
  const data = {
    labels: history.map((h) => h.city),
    datasets: [
      {
        label: "Temperature (°C)",
        data: history.map((h) => h.temp),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Line data={data} />
      </CardContent>
    </Card>
  );
}
