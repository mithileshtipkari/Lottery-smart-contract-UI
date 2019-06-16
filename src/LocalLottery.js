import web3 from './web3';

const address = '0x8F42Ff74cF55A14bAcb2E286DB93909386729095';

const abi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"nam
e":"listOfPlayers","outputs":[{"name":"","type":"address"}],"payab
le":false,"stateMutability":"view","type":"function"},{"constant":
true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"ad
dress"}],"payable":false,"stateMutability":"view","type":"function
"},{"constant":false,"inputs":[],"name":"pickWinner","outputs":[],
"payable":false,"stateMutability":"nonpayable","type":"function"},
{"constant":true,"inputs":[],"name":"getPlayers","outputs":[{"name
":"","type":"address[]"}],"payable":false,"stateMutability":"view"
,"type":"function"},{"constant":false,"inputs":[],"name":"enter","
outputs":[],"payable":true,"stateMutability":"payable","type":"fun
ction"},{"inputs":[],"payable":false,"stateMutability":"nonpayable
","type":"constructor"}];

export default new web3.eth.Contract(abi, address);
