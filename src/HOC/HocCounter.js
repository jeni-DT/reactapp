import React,{useState} from 'react'
import './Style.css'
const UpdatedComponent= (OriginalComponent)=>{
    const NewComponent=(props)=>{
        const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1)
    }
        return(
            <OriginalComponent count={count} increment={increment} {...props}/>
        )
    }
    return NewComponent
}



export default UpdatedComponent