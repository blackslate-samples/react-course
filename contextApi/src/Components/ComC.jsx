import React, {useContext} from "react"
import { NameState } from "../App"


const ComC = () => {

const InfoName = useContext(NameState);

  return (
    <div>
    <div className="C">Component C
    
    <h1>Name:{InfoName.name.Name}</h1>
    <h1>Age: {InfoName.name.age}</h1>
    </div>
    </div>
  )
}

export default ComC;