import Header from './Components/Header';
import './App.css';
import { useState } from 'react';
function App() {
  
  const [num, setNum] = useState(0);
  
  function inc()
  {
   setNum(num+1);
  }

  function dec() {
    setNum(num-1);
  }
   
  return (
    <div className="App">   
<Header/>

<div className='main'>
  <h1>{num}</h1>
  <div className="btn">

    <button onClick={inc}>Increase</button>
    <button onClick={dec}>decrese</button> 
  </div>

</div>

    </div>
  );
}   

export default App;
