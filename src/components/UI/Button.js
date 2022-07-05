import React from 'react';

import styles from './Button.module.css';

const Button = props => {
  // const classes = 'button'+ props.className;

  return (
    <button type={props.type} onClick={props.onClick} className={styles.button}>
      {props.children}
    </button>
  )
};

export default Button;