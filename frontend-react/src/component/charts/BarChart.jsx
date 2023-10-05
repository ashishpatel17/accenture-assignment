import React, {  useContext } from "react";
import { applicationContext } from '../../App';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const BarChart = ({ height, color, barType, labelTrim, value }) => {

  const theme = useContext(applicationContext);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const hexColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#000000', '#FFFFFF', '#808080', '#C0C0C0', '#800000', '#808000', '#008000', '#800080', '#008080', '#000080', '#FFA500', '#FFC0CB', '#A52A2A', '#FFD700'];

  let labels = value ? value.map((d) => d.label) : [];

  const data = {
    labels: value ? value.map((d) => d.label) : [],
    datasets: [
      {
        backgroundColor: color === "random" ? hexColors : "#d8eef4",
        borderColor: color === "random" ? hexColors : "#d8eef4",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: value ? value.map((d) => d.data) : [],
        borderRadius: 10,
        maxBarThickness: (barType === "horizontal") ? 15 : 40,
        barThickness: "flex",
      },
    ],
  };


  const trimLabel = (text) => {
    if (labelTrim && text != undefined) {
      return text.length > 5 ? text.substring(0, 5) + "..." : text;
    } else {
      return text;
    }
  }

  const options = {
    // responsive: true, 
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true, // Show x-axis gridlines
          color: (theme === "dark") ? "rgba(213, 239, 243, 0.2)" : "#ededed", // Gridline color
          lineWidth: 1, // Gridline width
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true, // Show y-axis gridlines
          color: (theme === "dark") ? "rgba(213, 239, 243, 0.2)" : "#ededed", // Gridline color
          lineWidth: 1, // Gridline width
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  if (labelTrim) {
    options.scales.y.ticks = {
      callback: (value) => trimLabel(labels[value]), // Customize the label format as needed
    }
  }

  if (barType === "horizontal") {
    options.indexAxis = 'y';
  }


  return (
    <div>
      <Bar height={height} data={data} options={options} />
    </div>
  );
};

export default BarChart;
