import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'
const Contact=()=> {
    
  return (
    <div>
    <Modal/>
    <div className="ui raised very padded text container segment" style={{marginTop:'80px'}}>
    <Link to='/Alex' className='ui header'>Alex</Link>
    <p>Loreum Ipsum</p> 
    </div>

    <div className="ui raised very padded text container segment" style={{marginTop:'80px'}}>
    <Link to='/Willy' className='ui header'>Willy</Link>
    <p>Loreum Ipsum</p> 
    </div>
    </div>
    
  );
}

export default Contact;