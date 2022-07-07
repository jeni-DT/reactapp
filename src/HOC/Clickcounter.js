
import React from 'react'

const Clickcounter =(props) =>{
    


  return (
      
          <center>
           <button  onClick={props.increment}>{props.name} Click {props.count} times</button>
           </center>
     
   
  )
}

export default Clickcounter