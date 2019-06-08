import React from 'react';
import './LoginCard.css';

function LoginCard(){
  return(
    <div className="logincard">
      <p>Please enter Login credentials</p>
      <input placeholder='Email' />
      <br/>
      <input placeholder='Password' />
    </div>
  );
}

export default LoginCard;
