import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, registerables } from "chart.js";
import axios from 'axios';

ChartJS.register(...registerables, CategoryScale);
const BarChart = ({ year }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Gross',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }
    ]
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/top-gross/?year=${year}`);
        const data = response.data;

        if (Array.isArray(data) && data.length > 0) {
          setChartData({
            labels: data.map(movie => movie.title),
            datasets: [
              {
                label: 'Gross',
                data: data.map(movie => movie.gross),
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
              }
            ]
          });
        } else {
          throw new Error('Empty response or invalid data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Always set loading to false after data processing
      }
    };

    fetchData();
  }, [year]);

  if (loading) {
    return <div>Loading...</div>; // Optional: Render a loading indicator
  }

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
