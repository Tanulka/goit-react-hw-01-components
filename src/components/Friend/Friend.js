import React from 'react';
import PropTypes from 'prop-types';
import s from './Friends.module.css';

const Friend = ({ id, avatar, name, isOnline }) => (
  <li className={s.item} key={id}>
    <span className={isOnline ? s.statusOn : s.statusOff}></span>
    <img className={s.avatar} src={avatar} alt={name} width="48" />
    <p className={s.name}>{name}</p>
  </li>
);

Friend.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default Friend;
