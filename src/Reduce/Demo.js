import React, { useReducer, useEffect } from 'react'
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';


const initialvalue = {
    Myvalue: true,
    error: "",
    store: {},
    
};
const reducer = (state, action) => {
    switch (action.type) {
        case "Success":
            return {
                Myvalue: false,
                store: action.collection,
                error: ""

            }
            case "Failure":
            return {
                Myvalue: false,
                store: {},
                error: ".....ERROR!....."

            }
            default:
                return state;
    }

}

function DataFetch() {
       
    const [state, dispatch] = useReducer(reducer, initialvalue)
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(response=>{
        dispatch({
            type:"Success",
            error:"",
            collection:response.data
        })
     

     })
     .catch((error)=>{
        dispatch({
            type:"Failure",
            error:"",
            store:{}
            
        });

      });
      
    
      
    }, [])
    
    return (
        <div>
            {/* {state.Myvalue ?"Title":state.store.title } */}
            {state.store.length >0 && state.store.map((All)=>{
                return (
                    <div>
                        <p> <b style={{color:'red'}}>"PostId":</b>{All.postId}</p>
                        <p><b style={{color:'red'}}>"id:"</b>{All.id}</p>
                        <p><b style={{color:'red'}}>"name:"</b>{All.name}</p>
                        <p><b style={{color:'red'}}>"email:"</b>{All.email}</p>
                        <p><b style={{color:'red'}}>"body:"</b>{All.body}</p>

                    </div>
                )
                
            })}
            {state.error ?  state.error:null }
        </div>
    )
}

export default DataFetch