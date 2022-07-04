import React, { useState } from 'react';

import Button from '../UI/Button'
import styles from './UserInput.module.css';

const UserInput = props => {
  const [enteredValue, setEnteredValue] = useState({
    userName: '', 
    userAge: ''
  });

  const [isValid, setIsValid] = useState(true);

  const userNameInputChangeHandler = e => {
    setEnteredValue({userName: e.target.value, userAge: ''}); // 이름 저장
  };

  const userAgeInputChangeHandler = e => {
    (enteredValue.userName !== '') ? setEnteredValue({userName: enteredValue.userName, userAge: e.target.value}) : console.log('냠')
  }; // 이름 없으면 경고창 띄울까?

  const formSubmitHandler = e => {
    e.preventDefault();
    
    props.onAddUser(enteredValue);
    console.log(enteredValue);
    setEnteredValue({userName:'', userAge:''}) // 제출 시 입력창 초기화, 아래 value에 이거 전달
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>User name</label>
        <input type="text" onChange={userNameInputChangeHandler} value={enteredValue.userName}/>
      </div>
      <div>
        <label>Age &#40;Years&#41;</label>
        <input type="number" onChange={userAgeInputChangeHandler} value={enteredValue.userAge} />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  )
};

export default UserInput;