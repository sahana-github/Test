import React, { useState } from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import TopRatedChart from './TopRatedChart';

const Dashboard = () => {
  const [year, setYear] = useState(2020);

  return (
    <div>
      <h1>Movie Dashboard</h1>
      <div>
        <label>Select Year: </label>
        {/* Ensure input type is 'number' and value is parsed as integer */}
        <input type="number" value={year} onChange={e => setYear(parseInt(e.target.value))} />
      </div>
      <div>
        <h2>Top 5 Movies by Gross for {year}</h2>
        <BarChart year={year} />
      </div>
      {/* Uncomment these sections when ready to integrate */}
      {/* <div>
        <h2>Top 5 Movies/Series of All Time by Votes</h2>
        <LineChart />
      </div>
      <div>
        <h2>Top 10 Movies by Rating for {year}</h2>
        <TopRatedChart year={year} />
      </div> */}
    </div>
  );
};

export default Dashboard;
