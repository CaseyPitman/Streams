import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div className='ui dimmer modals visible active'>
      <div className='ui standard modal visible active'>
        <div className='header'>Delete Stream</div>
        <div className='content'>Confirm stream deletion</div>
        <div className='actions'>
          <button className='ui button'>Cancel</button>
          <button className='ui primary button'>Delete</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
