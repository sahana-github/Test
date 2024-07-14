import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const TopRatedChart = ({ year }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/top-rating/?year=${year}`);
        const data = response.data;
        setChartData({
          labels: data.map(movie => movie.title),
          datasets: [
            {
              label: 'Rating',
              data: data.map(movie => movie.rating),
              backgroundColor: 'rgba(255, 159, 64, 0.6)'
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, [year]);

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default TopRatedChart;
