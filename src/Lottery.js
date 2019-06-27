import React, { Component } from 'react';
import './Lottery.css';
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
                };
  }

  async componentDidMount(){
    const manager = await localLottery.methods.manager().call(); //fetch manager address
    const players = await localLottery.methods.getPlayers().call(); //fetch list of players
    const balance = await web3.eth.getBalance(localLottery.options.address); //fetch balance of contract

    this.setState({ manager, players, balance });
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    this.setState({message: 'Waiting for transaction to complete...'});
    await localLottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });
    this.setState({message: 'You have been entered into Lottery!'});
  };

  pickWinner = async () =>{
    const accounts = await web3.eth.getAccounts();

    this.setState({message: 'Waiting for transaction to complete...'});

    await localLottery.methods.pickWinner().send({
      from: accounts[0]
    });
    this.setState({message: 'A winner is picked!'});
  };

  render(){
    return (
      <div className="Lottery">
          <h1>
            Lottery Contract deployed on Rinkeby network
          </h1>

          <p>This contract is managed by {this.state.manager}</p>
          <p>There are currently <strong>{this.state.players.length}</strong> people who are competing, to win <strong>{web3.utils.fromWei(this.state.balance, 'ether')}</strong> ether!</p>
          <hr/>
          <form onSubmit={this.onSubmit}>
              <h3>Wanna try your luck?</h3>
              <h4>Enter into this Lottery by sending 0.01 or more Ether</h4>
              <div>
                  <label>Enter amount of Ether to enter lottery:</label>
                  <span> </span>
                  <input
                      placeholder="amount of ether"
                      value={this.state.value}
                      onChange={event => this.setState({value : event.target.value})}/>
              </div>
              <br/>
              <button>Enter to Lottery</button>
          </form>
          <hr/>
          <h3>Let's see who's the winner!</h3>
          <button onClick={this.pickWinner}>Pick Winner</button>
          <hr/>
          <h2>{this.state.message}</h2>
      </div>
    );
  };
}

export default Lottery;
