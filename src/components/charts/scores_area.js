import React from "react";
import { Line } from "react-chartjs-2";

const ScoreIncreaseChart = () => {
  // Sample data for score increase over the last six months
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Score Increase",
        data: [0, 10, 15, 25, 40, 50, 55, 55, 75, 90, 92.5, 95], // Sample scores for the last six months
        fill: true,
        borderColor: "rgb(255, 91, 34)",
        tension: 0.4,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <div className="heading-targets-1">
        Score Increase in Academic Year 2023-24
      </div>

      <Line data={data} options={options} />
    </div>
  );
};

export default ScoreIncreaseChart;
