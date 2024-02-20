import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = ({ data }) => {
  const chartRef = useRef();
  // console.log(data.values);
  let sum_targets = 0;
  for (let i = 0; i < data.values.length; i++) {
    sum_targets = sum_targets + data.values[i];
  }
  // console.log(sum_targets);
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.values,
            // backgroundColor: [
            //   "rgb(118, 69, 59)",
            //   "rgba(75, 192, 192)",
            //   "rgba(153, 102, 255)",
            //   "rgb(247, 39, 152)",
            //   "rgb(167, 209, 41)",
            //   "rgb(8, 2, 163)",
            //   "rgb(255, 237, 0)",
            //   "rgb(255, 23, 0)",
            //   "rgb(48, 77, 48)",
            //   "rgb(252, 103, 54)",
            // ],
            backgroundColor: data.bgclr,
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
      {" "}
      <div className="heading-targets">
        Overall targets sum of {data.grp} : {sum_targets}
      </div>
      <canvas ref={chartRef}></canvas>
    </>
  );
};

export default PieChart;
