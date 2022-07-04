import React from 'react';

import styles from './UserItem.module.css';

const UserItem = props => {

  return (
    <li>
      {props.children}
    </li>
  )
};

export default UserItem;