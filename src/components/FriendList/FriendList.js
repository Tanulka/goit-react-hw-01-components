import React from 'react';
import PropTypes from 'prop-types';
import Friend from '../Friend/Friend';

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li class="item" key={id}>
        <Friend avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
