import './App.css';
import ComA from './Components/ComA';
import { useState} from 'react';
import { createContext  } from 'react';

const NameState = createContext();

function App() {

const [name, setName] = useState({Name: "Shubham", age:20})   

  return (
<div className="App">

<NameState.Provider value={{name}} >
<ComA />
</NameState.Provider>

    </div> 
  );
}
export default App;
export{NameState}
