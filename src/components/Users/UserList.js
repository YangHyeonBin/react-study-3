import React from 'react';

import Card from '../UI/Card';
import UserItem from './UserItem';

import styles from './UserList.module.css';

const UserList = props => {
  
  return (
    <Card className={styles.users}>
      <ul>
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
    </Card>
  )
};

export default UserList;