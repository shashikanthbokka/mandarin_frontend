import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "Total Targets",
            data: data.total,
            backgroundColor: data.bgclr,
            borderColor: data.borderclr,
            // backgroundColor: "rgba(255, 145, 48, 0.2)",
            // borderColor: "rgba(255, 145, 48, 1)",
            borderWidth: 1,
            fill: true,
            tension: 0.3,
          },
          {
            label: "Completed Targets",
            data: data.completed,
            backgroundColor: "rgba(45, 50, 80, 0.2)",
            borderColor: "rgba(45, 50, 80, 1)",
            // backgroundColor: "rgba(45, 50, 80, 0.2)",
            // borderColor: "rgba(45, 50, 80, 1)",
            borderWidth: 1,
            fill: true,
            tension: 0.2,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "category",
            labels: data.labels,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => chart.destroy();
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default LineChart;
