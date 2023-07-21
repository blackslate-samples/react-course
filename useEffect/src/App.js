import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';

function App() {

  const [state, setState] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    // the code that we want to run

    async function getData() {
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
    
    const res = await get.json();
    setData(res);
    console.log(res);    

    document.title = `${state} Online Enployees`  ;  

  } 
getData();
  },[state]) // The dependency array

  return (
    <div  className="App">
     <div className="main"> 
     <h3>Click Here to Generate more Data = </h3>
      <button onClick={() => {setState(state+1)}} >click me {state}</button>
       <Header/>
       {
       data.map((element, index) => {
        return(
          <div className='data' key={index} >
            <h2>{element.firstName}</h2>
            <h2>{element.lastName}</h2>
            <h2>{element.email}</h2>
            </div>
        )
       })
      }
     </div>
    </div>
  );
}

export default App;
