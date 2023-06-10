import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
const Modal=(props)=> {
  return ReactDOM.createPortal(
    <div className='ui dimmer show modals visible active'>
    <div className='ui raised very padded text container segment'>
    <h1> I am a Modal </h1>
    <button><Link to='/'> back </Link></button>
    </div>
    </div>,
    document.querySelector('#modal')
  );
}

export default Modal;