import React from 'react';
import { Link } from 'react-router-dom';

const Contact=()=> {
    
  return (
    <div>
    <div className="ui raised very padded text container segment" style={{marginTop:'80px'}}>
    <Link to='/Card/Alex' className='ui header'>Alex</Link>
    <p>Loreum Ipsum</p> 
    </div>

    <div className="ui raised very padded text container segment" style={{marginTop:'80px'}}>
    <Link to='/Card/Willy' className='ui header'>Willy</Link>
    <p>Loreum Ipsum</p> 
    </div>
    </div>
    
  );
}

export default Contact;