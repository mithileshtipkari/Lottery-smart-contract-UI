import React, { Component } from 'react';
import './Lottery.css';
import LoginCard from './LoginCard';
import web3 from './web3';
import localLottery from './LocalLottery';

class Lottery extends Component {
  constructor(props){
    super(props);
    this.state = {manager: ''};
  }

  async componentDidMount(){
    console.log('mounted');
    const manager = await localLottery.methods.manager().call();

    this.setState({ manager });
  }
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
          <p>This contract is managed by {this.state.manager}</p>
      </div>
    );
  };
}

export default Lottery;
