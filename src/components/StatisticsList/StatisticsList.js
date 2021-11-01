import React from 'react';
import PropTypes from 'prop-types';
import Statistics from '../Statistics/Statistics';

const StatisticsList = ({ title, statistics }) => (
  <section class="statistics">
    {title && <h2 class="title">{title}</h2>}
    <ul class="stat-list">
      {statistics.map(({ id, label, percentage }) => (
        <Statistics id={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);

StatisticsList.defaultProps = {
  title: '',
  stastics: [],
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.array,
};

export default StatisticsList;
