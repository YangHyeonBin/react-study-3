import React, { useState } from 'react';

import UserInput from './components/Users/UserInput';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (enteredUserInfo) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers]
      updatedUsers.push({
        userName: enteredUserInfo.userName,
        userAge: enteredUserInfo.userAge,
        id: Math.random().toString()
      });
      return updatedUsers;
    });
  }

  let content;

  if (users.length > 0) {
    content = <UserList users={users} />
  }

  return (
    <div>
      {/* <section className={styles.userForm}> */}
      <UserInput onAddUser={addUserHandler} />
      {/* </section> */}
      {/* <section className={`${styles.users} ${content ? styles.show : ''}`}>{content}</section> */}
      <div>{content}</div>
    </div>
  );
};

export default App
