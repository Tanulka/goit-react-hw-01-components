import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ id, label, percentage }) => (
  <li class="item" id={id}>
    <span class="label">{label}</span>
    <span class="percentage">{percentage}</span>
  </li>
);

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
