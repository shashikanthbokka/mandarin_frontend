import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.values,
            backgroundColor: [
              "#2d3250",
              "#fecda6",
              //   "rgba(255, 206, 86, 0.7)",
              //   "rgba(75, 192, 192, 0.7)",
              //   "rgba(153, 102, 255, 0.7)",
              //   "rgba(255, 159, 64, 0.7)",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        hoverOffset: 10,

        // Other chart options can be customized here
      },
    });

    return () => chart.destroy();
  }, [data]);

  return (
    <>
      <div className="heading-targets">Overall targets</div>
      <canvas ref={chartRef}></canvas>
    </>
  );
};

export default PieChart;
