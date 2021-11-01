import React from 'react';

import './App.css';
import user from './user.json';
import Profile from './components/Profile/Profile';

import statisticalData from './statistical-data.json';
import StatisticsList from './components/StatisticsList/StatisticsList';

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList title="Statistics" statistics={statisticalData} />
    </div>
  );
}

export default App;
