const Movies = (props) => {    
  return (
   <div className="movies"> 

   <img src = {props.img} alt=""/>
   <p>{props.name}</p>
   <p>{props.year}</p>

   </div>
   
  )
}

export default Movies

