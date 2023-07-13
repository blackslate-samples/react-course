import './App.css';
import Movies from './Components/Movies';
import movie from './movie.json'

function App() {
  
  return (
    <div className="App">
  
     <div className='main'>
      
    {
      movie.map((element, index) => {   
return( 
  <Movies 
  key = {index}
  img = {element.Poster}
  name = {element.Title}
  year = {element.Year}
  />
)
      })
    }  
      
     </div>
    </div>
  );
}   

export default App;
