import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import WarningModal from '../UI/WarningModal';
import styles from './UserInput.module.css';

const UserInput = props => {
  const [enteredValue, setEnteredValue] = useState({
    userName: '', 
    userAge: ''
  });

  // const [hasValue, setHasValue] = useState(true);

  // const [isValid, setIsValid] = useState(true);

  const [error, setError] = useState();

  const formSubmitHandler = e => {
    e.preventDefault();
    if (enteredValue.userName.trim().length === 0 || enteredValue.userAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty value).',
      });
      return;
    }
    if (+enteredValue.userAge < 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (> 0).',
      });
      setEnteredValue({userName: enteredValue.userName, userAge: ''});
      return;
    }
    props.onAddUser(enteredValue);
    setEnteredValue({userName:'', userAge:''}) // 제출 시 입력창 초기화, 아래 value에 이거 전달
  };

  const userNameInputChangeHandler = e => {
    // if (e.target.value.trim().length > 0) {
    //   setHasValue(true);
    // }
    setEnteredValue({userName: e.target.value, userAge: ''}); // 이름 저장
  };

  const userAgeInputChangeHandler = e => {
    // if (e.target.value.trim().length > 0) {
    //   setHasValue(true);
    // }
    // if (+e.target.value >= 0) {
    //   setIsValid(true);
    // }
    setEnteredValue({userName: enteredValue.userName, userAge: e.target.value})
  };

  const modalHandler = () => {
    setError(null);
  };

  return (
    <div>
      <Card className={styles.form}>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="username">User name</label>
            <input
              id="username"
              type="text" 
              value={enteredValue.userName}
              onChange={userNameInputChangeHandler} />
          </div>
          <div>
            <label htmlFor="age">Age &#40;Years&#41;</label>
            <input 
              id="age"
              type="number" 
              value={enteredValue.userAge}
              onChange={userAgeInputChangeHandler} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {error && (
        <WarningModal 
          title={error.title}
          message={error.message}
          // className={`${hasValue && styles.valid}`} 
          onConfirm={modalHandler} />
      )}
    </div>
  )
};

export default UserInput;