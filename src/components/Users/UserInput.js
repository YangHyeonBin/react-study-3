import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import WarningModal from '../UI/WarningModal';
import styles from './UserInput.module.css';

const UserInput = props => {
  // const [enteredValue, setEnteredValue] = useState({
  //   userName: '', 
  //   userAge: ''
  // });

  // const [hasValue, setHasValue] = useState(true);

  // const [isValid, setIsValid] = useState(true);

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const formSubmitHandler = e => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty value).',
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (> 0).',
      });
      // setEnteredValue({userName: enteredValue.userName, userAge: ''});
      ageInputRef.current.value = '';
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    // setEnteredValue({userName:'', userAge:''}) // 제출 시 입력창 초기화, 아래 value에 이거 전달
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  // const userNameInputChangeHandler = e => {
  //   // if (e.target.value.trim().length > 0) {
  //   //   setHasValue(true);
  //   // }
  //   setEnteredValue({userName: e.target.value, userAge: ''}); // 이름 저장
  // };

  // const userAgeInputChangeHandler = e => {
  //   // if (e.target.value.trim().length > 0) {
  //   //   setHasValue(true);
  //   // }
  //   // if (+e.target.value >= 0) {
  //   //   setIsValid(true);
  //   // }
  //   setEnteredValue({userName: enteredValue.userName, userAge: e.target.value})
  // };

  const modalHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      <Card className={styles.form}>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="username">User name</label>
            <input
              id="username"
              type="text" 
              ref={nameInputRef}
              // value={enteredValue.userName}
              // onChange={userNameInputChangeHandler} 
            />
          </div>
          <div>
            <label htmlFor="age">Age &#40;Years&#41;</label>
            <input 
              id="age"
              type="number" 
              ref={ageInputRef}
              // value={enteredValue.userAge}
              // onChange={userAgeInputChangeHandler} 
            />
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
    </React.Fragment>
  )
};

export default UserInput;