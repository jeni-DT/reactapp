import React, { useReducer, useState } from 'react'
import "./Ex.css"




function Exreduce() {
    const Reduce = (state, action) => {
        switch (action.type) {
            case "Add":
                return state + 1;
            case "Sub":
                return state - 1;
                case "Reset":
                    return 0;
                    
                   
                    default:
                        throw new Error();
        }
    };
    
    const [state, dispatch] = useReducer(Reduce, 0);
    

    return (
        <div className='container' >
            <h1>Using useReducer</h1>
            <h1>{state}</h1>
            <button className='btn1' onClick={()=>dispatch({type:"Add"})} >Add</button>
            <br></br>
            <button className='btn2'onClick={()=>dispatch({type:"Sub"})} >Sub</button>
            <br></br>
            <button className='btn3' onClick={()=>dispatch({type:"Reset"})} >Reset</button>
            <br></br>
            
        </div>
    )
}

export default Exreduce