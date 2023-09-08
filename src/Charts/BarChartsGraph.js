import React from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { UserData } from "../Data/Data";
import { Chart as ChartsJs } from "chart.js/auto";

const BarChartsGraph = ({ chartsData }) => {
  const [userData, setUseData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["lightblue"],
        barPercentage: 0.2,
        
      },
    ],
  });

  const chartOptions = {
    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding:5
      }}
    >
    <Bar data={userData} options={chartOptions} />
     </div>
  );
};

export default BarChartsGraph;
