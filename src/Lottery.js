import React, { Component } from 'react';
import './Lottery.css';
import LoginCard from './LoginCard';
import web3 from './web3';

class Lottery extends Component {
  render(){
    console.log(web3.version);
    console.log(web3.currentProvider);
    // web3.eth.getAccounts().then(console.log);
    return (
      <div className="Lottery">
          <h1>
            Lottery Contract deployed on Rinkeby network
          </h1>
          <LoginCard/>
      </div>
    );
  };
}

export default Lottery;
