import React, { useState } from 'react';

import UserInput from './components/Users/UserInput';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers]
      updatedUsers.push({
        userName: uName,
        userAge: uAge,
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
    <React.Fragment>
      {/* <section className={styles.userForm}> */}
      <UserInput onAddUser={addUserHandler} />
      {/* </section> */}
      {/* <section className={`${styles.users} ${content ? styles.show : ''}`}>{content}</section> */}
      <div>{content}</div>
    </React.Fragment>
  );
};

export default App
