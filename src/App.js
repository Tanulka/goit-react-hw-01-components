import React from 'react';

import './App.css';
import user from './user.json';
import Profile from './components/Profile/Profile';

import statisticalData from './statistical-data.json';
import StatisticsList from './components/StatisticsList/StatisticsList';

import friends from './friends.json';
import FriendList from './components/FriendList/FriendList';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transaction from './transaction.json';

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
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
}

export default App;
