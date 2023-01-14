import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { LineAxis } from "@mui/icons-material";


function LineChart({ chartData }) {
  
  return <
 
    Line data={chartData} />;
}

export default LineChart;
