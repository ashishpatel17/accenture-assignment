import { React, useContext } from 'react';
import { applicationContext } from '../../App';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';


const DonutChart = ({ chartData, labelKey, dataKey }) => {

  const theme = useContext(applicationContext);


  ChartJS.register(ArcElement, Tooltip, Legend);


  const data = {
    labels: chartData ? chartData.map((data) => { return data[labelKey] }) : [],
    datasets: [
      {
        data: chartData ? chartData.map((data) => { return data[dataKey] }) : [],
        backgroundColor: ['#5b8ef2', '#545f84', '#ed795f', '#f0c41a', '#71c285'],
        hoverBackgroundColor: ['#5b8ef2', '#545f84', '#ed795f', '#f0c41a', '#71c285'],
        borderColor: 'transparent',
      },
    ],
  };

  const options = {
    // responsive: true, 
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: theme == "dark" ? "white" : "black", // Font color of the labels
        display: true,
        align: 'center', // Center align the labels
        anchor: 'center', // Anchor labels at the center
        font: {
          size: 16,
        },
      },
      legend: {
        labels: {
          usePointStyle: true,
          align: 'start',
          pointStyle: 'circle',
          fontSize: 10,
          color: theme == "dark" ? "white" : "black"
        },
        display: true,
        position: 'bottom',
      }
    },
  };
  return (<Doughnut height="260" data={data} options={options} />);
}


export default DonutChart;

