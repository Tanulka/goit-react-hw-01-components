import React from 'react';
import PropTypes from 'prop-types';
import Friend from '../Friend/Friend';

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <Friend id={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
