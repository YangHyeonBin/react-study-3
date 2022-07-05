import React from 'react';
import UserItem from './UserItem';

import styles from './UserList.module.css';

const UserList = props => {
  
  return (
    <ul className={styles.ul}>
      {props.users.map(user => (
        <UserItem
          key={user.id}
          // userName={user.userName} // 필요 없나 봐
          // userAge={user.userAge}
        >
          {/* {`${user.userName} (${user.userAge} years old)`} */}
          {user.userName} ({user.userAge} years old)
        </UserItem>
      ))}
    </ul>
  )
};

export default UserList;