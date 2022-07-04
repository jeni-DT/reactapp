import React, { useState } from 'react'

const NewFun = () => {
    const[name,setName] = useState("");
    const handleChange =(e)=>{
        setName(e.target.value);

    }

  return (
    <div className='new'>
        <h1 style={{color:"blue"}}>Twoway binding</h1>
        <h2> {name}</h2>
        <input type ="text" value={name} onChange={handleChange}></input>
        
    </div>
  )
}
export default NewFun
