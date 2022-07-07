import React,{useReducer} from 'react'

 const State_Change="State_Change"

const initialstate={
    user:"",
};

const reducer=(state,action)=>{
    switch (action.type)
    {
        case State_Change:
            return{
                user:action.payload,

            }
    }
    return state;

}
const AuthContext=React.createContext();


const AuthProvider=(props) =>{
    const[state,dispatch]=useReducer(reducer,initialstate);
    const actions={
         authStateChanged:(user)=>{
            if(user){
                dispatch({type:State_Change,payload:user});
            }
        },
    };
  return (
      <AuthContext.Provider value={{authState:state,
      Authaction:actions}}>
          {props.children}

      </AuthContext.Provider>

  )
}
export  {AuthContext,AuthProvider}

