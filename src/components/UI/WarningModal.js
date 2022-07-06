import React from 'react';

import ReactDOM from 'react-dom';

import Button from './Button';
import Card from './Card';
import styles from './WarningModal.module.css';

const WarningModal = (props) => {
  // const classes = 'modal ' + props.className; // valid 땐 안 보이게 하기 위함

  // const okButtonClickHandler = () => {
  //   props.onButtonClick();
  // }; // onConfirm 바로 전달함

  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm} />;
  };

  const ModalOverlay = props => {
    return (
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
    )
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm} />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default WarningModal;
