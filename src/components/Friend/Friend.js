import React from 'react';
import PropTypes from 'prop-types';

const Friend = ({ avatar, name, isOnline }) => (
  <div>
    <span
      class="status"
      className={isOnline ? 'status isOnline' : 'status'}
    ></span>
    <img class="avatar" src={avatar} alt={name} width="48" />
    <p class="name">{name}</p>
  </div>
);

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default Friend;
