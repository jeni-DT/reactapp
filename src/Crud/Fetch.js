import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialvalue = {
    Loading: true,
    error: "",
    post: {},
    
};

const reducer = (state, action) => {
    switch (action.type) {
        case "Success":
            return {
                Loading: false,
                post: action.collection,
                error: ""

            }
            case "Failure":
            return {
                Loading: false,
                post: {},
                error: ".....ERROR!....."

            }
            default:
                return state;
    }

}


function Fetch() {
    const[state,dispatch]= useReducer(reducer,initialvalue)
    useEffect(() => {
      axios.get('http://localhost:3007/list')
      .then((request)=>{
        dispatch({
            type:"Success",
            error:"",
            collection:request.data
        })
      })
      .catch((error)=>{
        dispatch({
            type:"Failure",
            error:"",
            post:{}
            
        });
      })
    
     
    }, [])
    

  return (
    <div>
        {state.post.length>0 && state.post.map((All)=>{
            return(
                <div>
                <p>{All.Regno} </p>
                <p>{All.Name}</p>
                <p>{All.Class}</p>
                <p>{All.Mark}</p>
                </div>
            )
        })}
        {state.error ?  state.error:null }
    </div>
  )
}

export default Fetch