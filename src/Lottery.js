import React from 'react';
import logo from './logo.svg';
import './Lottery.css';
import LoginCard from './LoginCard';

function App() {
  return (
    <div className="Lottery">
        <h1>
          Lottery Contract deployed on Rinkeby network
        </h1>
        <LoginCard/>
    </div>
  );
}

export default App;
