import React, { useEffect, useState } from 'react';
import RealboxTokenTimelock from '../contracts/RealboxTokenTimelock.sol';
import './App.css';

const [manager, setManager] = useState('');
const [players, setPlayers] = useState([]);
const [contractBalance, setContractBalance] = useState('');
const [value, setValue] = useState('');
const [message, setMessage] = useState('');

 useEffect(() => {
  const init = async () => {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    setManager(manager);
    setPlayers(players);
    setContractBalance(balance);
  };
  init();
}, []);

function App() {
  return (

    

    <div className="App">
      
    <div>
    <button>Connect wallet</button>
    </div>

      <div>
    <h1>First set the Beneficiery </h1>
    <input type='text' placeholder=' Enter address'></input> <br/>
    <input type='number' placeholder ='Enter allocation'></input> <br/>
    <button>Set Beneficiery</button>
    <p>Beneficiery is set{setBeneficiary}</p>
      </div>
    <h1>Check Beneficiery</h1>
    <input type= 'number' placeholder='Allocation'></input> <br/>
    <p> Beneficiery allocated to this particular address = {beneficiary} </p>
    <button>Check</button>
    <h1>Unlock Dev Team</h1>
    <p>Team Unclocked with {}REB</p>
    <button>Unlock</button>
    <h1>Press the bellow button to Withdraw</h1>
    <input type= 'number' placeholder='Allocation'></input> <br/>
    <button>Withdraw</button><br/>
    <p>withdrawl has been processed {Withdraw}</p>




    </div>
  
  );
}

export default App;
