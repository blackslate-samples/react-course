import './App.css';
import Navbar from './Components/Navbar.jsx';
import React from "react";
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Error from './Components/Error';

function App() {
  return (
   <Router>
    <div className="App">        
     
     <Navbar/>
  
     <Routes>
      {/* Home  */}
          <Route path="/" element={<Home/>} />     
      
          {/* About  */}
          <Route path="/about" element ={<About/>} />

          {/* Home  */}
          <Route path="/contact" element={<Contact/>}/>
           
          <Route path='*' element={<Error/>} />

    
        </Routes>
    
</div>
</Router>
  );
}

export default App;
