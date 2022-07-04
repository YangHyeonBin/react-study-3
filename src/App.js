import React, { useState } from 'react';

import UserInput from './components/Users/UserInput';
import UserList from './components/Users/UserList';

import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (enteredUserInfo) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers]
      updatedUsers.unshift({
        userName: enteredUserInfo.userName,
        userAge: enteredUserInfo.userAge,
        id: Math.random().toString()
      });
      console.log(updatedUsers);
      return updatedUsers;
    });
  }

  let content;

  if (users.length > 0) {
    content = <UserList items={users} />
  }

  return (
    <div>
      <section id="user-form">
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section id="users">{content}</section>
    </div>
  );
};

export default App
