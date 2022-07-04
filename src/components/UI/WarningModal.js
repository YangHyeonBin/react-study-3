import React from 'react';

import Button from './Button';
import styles from './WarningModal.module.css';

const WarningModal = props => {
  const okButtonClickHandler = () => {

  };

  return (
    <section>
      <h1>{props.warningMessage}</h1>
      <p>{props.children}</p>
      <Button type="button" onClick={okButtonClickHandler}>Okay</Button>
    </section>
  )
};

export default WarningModal;