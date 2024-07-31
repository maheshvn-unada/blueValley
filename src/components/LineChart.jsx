import React from "react";
import "./LineChart.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  plugins,
  animator,
  scales,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  plugins
);

const LineChart = () => {
  const data = {
    labels: ["1971", "1981", "1991", "2001", "2011"],
    datasets: [
      {
        label: "Population Count",
        data: [0, 500, 400, 650, 740],
        backgroundColor: "#00A36C",
        borderColor: "#00A36C",
      },
      {
        label: "No. of Households",
        data: [100, 300, 800, 500, 620],
        backgroundColor: "#F44236",
        borderColor: "#F44236",
      },
      {
        label: "Working Population",
        data: [90, 60, 300, 750, 820],
        backgroundColor: "#FFCA29",
        borderColor: "#FFCA29",
      },
      {
        label: "Working Population",
        data: [100, 300, 500, 250, 450],
        backgroundColor: "#DAA520",
        borderColor: "#DAA520",
      },
      {
        label: "Working Population",
        data: [300, 200, 600, 150, 50],
        backgroundColor: "#088F8F",
        borderColor: "#088F8F",
      },
      {
        label: "",
        data: [110],
        backgroundColor: "transparent",
        borderColor: "transparent",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          boxWidth: 6.5,
          boxHeight: 6.5,
          usePointStyle: true,
          pointStyle: "circle",
        },
        position: "bottom",
        align: "center",
      },
      title: {
        display: true,
        text: "Demography",
        position: "top",
        align: "start",
        padding: {
          bottom: 20,
          top: 20,
        },
        font: {
          size: 24,
          color: "#DAA520",
        },
      },
    },
    scales: {
      y: {
        beginAtZer0: true,
        color: "#FFFFFF",
        position: "left",
        ticks: {
          callback: function (value, index, values) {
            return `${value} k`;
          },
        },
        grid: {
          color: "grey",
        },
      },
      x: {
        ticks: {
          color: "#FFFFFF",
        },
        grid: {
          color: "grey",
        },
      },
    },
  };

  return (
    <>
      <div className="container">
        <div
          style={{
            width: 650,
            height: 350,
            background: "#000000",
            color: "#FFFFFF",
            borderRadius: 10,
            marginTop: 10,
            marginLeft: 10,
            paddingLeft: 15,
          }}
        >
          {/* <button style={{ backgroundColor: "green", alignItems: "end" }}>X</button> */}
          <Line data={data} options={options}></Line>
        </div>
      </div>
    </>
  );
};

export default LineChart;
