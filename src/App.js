import logo from './logo.svg';
import './App.css';

import Tooltip from './tooltip/Tooltip';







function App() {
  return (
    <div className="App">

      <h3>Welcome to react tooltip</h3>
      <p >Hover on the elements below to see the tooltip effect :--</p>
      
        
          <Tooltip 
          message='Welcome to react tooltip'
          color='red'
          bgcolor='yellow'
          left='0'
          top='0'
          > 
             Hi everyone 
           </Tooltip>



           <Tooltip 
          message='Insufficient Balance'
          color='white'
          bgcolor='red'
          left='-50'
          top='0'
          > 
            <button>Pay</button>
           </Tooltip>



           <Tooltip 
          message='please subscribe '
          color='white'
          bgcolor='red'
          left='-30'
          top='10'
          > 
            <button><h2>Play</h2></button>
           </Tooltip>


         
          
    </div>
  );
}

export default App;
