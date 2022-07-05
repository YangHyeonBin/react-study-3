import React, { useState } from 'react';

import Button from '../UI/Button'
import WarningModal from '../UI/WarningModal';
import styles from './UserInput.module.css';

const UserInput = props => {
  const [enteredValue, setEnteredValue] = useState({
    userName: '', 
    userAge: ''
  });

  const [hasValue, setHasValue] = useState(true);

  const [isValid, setIsValid] = useState(true);

  const userNameInputChangeHandler = e => {
    if (e.target.value.trim().length > 0) {
      setHasValue(true);
    }
    setEnteredValue({userName: e.target.value, userAge: ''}); // 이름 저장
  };

  const userAgeInputChangeHandler = e => {
    if (e.target.value.trim().length > 0) {
      setHasValue(true);
    }
    if (+e.target.value >= 0) {
      setIsValid(true);
    }
    (enteredValue.userName !== '') ? setEnteredValue({userName: enteredValue.userName, userAge: e.target.value}) : console.log('냠')
  }; // 이름 없으면 경고창 띄울까?

  const formSubmitHandler = e => {
    e.preventDefault();
    if (enteredValue.userName.trim().length === 0 || enteredValue.userAge.trim().length === 0) {
      setHasValue(false);
      return;
    }
    if (+enteredValue.userAge < 0) {
      setIsValid(false);
      setEnteredValue({userName:'', userAge:''});
      return;
    }
    props.onAddUser(enteredValue);
    setEnteredValue({userName:'', userAge:''}) // 제출 시 입력창 초기화, 아래 value에 이거 전달
  };

  const modalHandler = () => {
    setHasValue(true);
    setIsValid(true);
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <div>
          <label>User name</label>
          <input
            type="text" 
            onChange={userNameInputChangeHandler} value={enteredValue.userName} />
        </div>
        <div>
          <label>Age &#40;Years&#41;</label>
          <input 
            type="number" 
            onChange={userAgeInputChangeHandler} 
            value={enteredValue.userAge} />
        </div>
        <Button type="submit" className=''>Add User</Button>
      </form>
      <WarningModal 
          warningMessage='Invalid input' 
          className={`${hasValue && styles.valid}`} 
          onButtonClick={modalHandler}>
          Please enter a valid name and age &#40;non-empty values&#41;.
      </WarningModal>
      <WarningModal 
        warningMessage='Invalid input' 
        className={`${styles.warning} ${isValid && styles.valid}`} 
        onButtonClick={modalHandler}>
        Please enter a valid age &#40;&gt; 0&#41;.
      </WarningModal>
    </div>
  )
};

export default UserInput;