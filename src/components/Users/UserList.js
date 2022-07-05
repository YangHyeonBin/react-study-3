import React from 'react';
import UserItem from './UserItem';

import styles from './UserList.module.css';

const UserList = props => {
  
  return (
    <ul className={styles.ul}>
      {props.items.map(userInfo => (
        <UserItem
          key={userInfo.id}
          userName={userInfo.userName}
          userAge={userInfo.userAge}
        >
          {`${userInfo.userName} (${userInfo.userAge} years old)`}
        </UserItem>
      ))}
    </ul>
  )
};

export default UserList;