import React from 'react';
import classes from "./Modal.module.scss"

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
console.log(JSON.stringify(classes))
  return (
    <div className={classes.overlay} onClick={handleOverlayClick}>
      <div className={classes.modal}>
        <button onClick={onClose} className={classes.closeButton}>✖</button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
