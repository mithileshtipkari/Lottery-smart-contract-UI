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
                  balance: '',
                  value: '',
                  message: '',
                  accounts: []
                };
  }

  async componentDidMount(){
    console.log('mounted');
    const manager = await localLottery.methods.manager().call(); //fetch manager address
    const players = await localLottery.methods.getPlayers().call(); //fetch list of players
    const balance = await web3.eth.getBalance(localLottery.options.address); //fetch balance of contract
    const accounts = await web3.eth.getAccounts();

    this.setState({ manager, players, balance, accounts });
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    console.log('acc-', accounts);
    this.setState({message: 'Waiting for transaction to complete...'});
    await localLottery.methods.enter().send({
      from: accounts[1],
      value: web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({message: 'You have been entered into Lottery!'});
  };

  render(){
    // console.log(web3.version);
    // console.log(web3.currentProvider);
    // web3.eth.getAccounts().then(console.log);
    return (
      <div className="Lottery">
          <h1>
            Lottery Contract deployed on Rinkeby network
          </h1>

          <p>This contract is managed by {this.state.manager}</p>
          <p>There are currently <strong>{this.state.players.length}</strong> people who are competing, to win <strong>{web3.utils.fromWei(this.state.balance, 'ether')}</strong> ether!</p>
          <p>Accounts available are:{this.state.accounts.length}</p>
          <hr/>
          <form onSubmit={this.onSubmit}>
              <h3>Wanna try your luck?</h3>
              <h4>Enter into this Lottery by sending 0.01 or more Ether</h4>
              <div>
                  <label>Enter amount of Ether to enter lottery</label>

                  <input
                      placeholder="amount of ether"
                      value={this.state.value}
                      onChange={event => this.setState({value : event.target.value})}/>
              </div>
              <br/>
              <button>Enter to Lottery</button>
          </form>
          <hr/>
          <h2>{this.state.message}</h2>
      </div>
    );
  };
}

export default Lottery;
