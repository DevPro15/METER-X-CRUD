import React from "react";
// Chart Component
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// ----------------------------------------------------------------------
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },

    y: {
      grid: {
        display: false,
        // color: "white",
      },
    },
  },
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "bottom",
    },
  },
};

export default function BarChart() {
  const data = {
    // labels: xLabels,
    labels: ["Speech", "Music", "Tick-tock", "Animal", "Human"],
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 2, 2, 3, 4],
        borderColor: "#1b75bc",
        backgroundColor: "#00aeef",
      },
    ],
  };

  return (
    <div className="d-flex justify-content-center align-items-center my-5 ">
      <div style={{ width: "60%", height: "100%" }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
