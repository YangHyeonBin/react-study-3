import React from 'react';

import Button from './Button';
import Card from './Card';
import styles from './WarningModal.module.css';

const WarningModal = props => {
  // const classes = 'modal ' + props.className; // valid 땐 안 보이게 하기 위함

  // const okButtonClickHandler = () => {
  //   props.onButtonClick();
  // }; // onConfirm 바로 전달함

  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h1>{props.title}</h1>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>      
    </div>
  )
};

export default WarningModal;