import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, registerables } from "chart.js";

ChartJS.register(...registerables, CategoryScale);
const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Votes',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/top-votes/');
        const data = response.data;
        setChartData({
          labels: data.map(movie => movie.title),
          datasets: [
            {
              label: 'Votes',
              data: data.map(movie => movie.votes),
              backgroundColor: 'rgba(153, 102, 255, 0.6)'
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
