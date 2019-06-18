import React, { Component } from 'react';
import './Lottery.css';
import LoginCard from './LoginCard';
import web3 from './web3';
import localLottery from './LocalLottery';

class Lottery extends Component {
  constructor(props){
    super(props);
    this.state ={manager: '',
                  players: [],
                  balance: ''
                };
  }

  async componentDidMount(){
    console.log('mounted');
    const manager = await localLottery.methods.manager().call(); //fetch manager address
    const players = await localLottery.methods.getPlayers().call(); //fetch list of players
    const balance = await web3.eth.getBalance(localLottery.options.address); //fetch balance of contract
    this.setState({ manager, players, balance });
  }
  render(){
    // console.log(web3.version);
    // console.log(web3.currentProvider);
    // web3.eth.getAccounts().then(console.log);
    return (
      <div className="Lottery">
          <h1>
            Lottery Contract deployed on Rinkeby network
          </h1>
          <LoginCard/>
          <p>This contract is managed by {this.state.manager}</p>
          <p>There are currently {this.state.players.length} people competing to win {web3.utils.fromWei(this.state.balance, 'ether')} ether!</p>
      </div>
    );
  };
}

export default Lottery;
