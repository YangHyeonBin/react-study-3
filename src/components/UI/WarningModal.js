import React from 'react';

import Button from './Button';
import styles from './WarningModal.module.css';

const WarningModal = props => {
  const classes = 'modal ' + props.className; // valid 땐 안 보이게 하기 위함

  const okButtonClickHandler = () => {
    props.onButtonClick();
  };

  return (
    <div className={classes}>
      <div className={styles.background} onClick={okButtonClickHandler}></div>
      <section className={styles.section}>
        <h1>{props.warningMessage}</h1>
        <p>{props.children}</p>
        <Button type="button" onClick={okButtonClickHandler} className={styles.button}>Okay</Button>
      </section>
    </div>
  )
};

export default WarningModal;