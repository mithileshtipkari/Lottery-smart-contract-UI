import React from 'react';
import './LoginCard.css';

function LoginCard(){
  return(
    <div className="logincard">
      <p>Please enter Login credentials</p>
      <input placeholder='Email' type='text'/>
      <br/>
      <input placeholder='Password' type='password'/>
    </div>
  );
}

export default LoginCard;
