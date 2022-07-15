import React from 'react'
import Login from './Login'
import {AuthProvider} from './Provider'

const  Provider2=() =>{
  return  (
      <AuthProvider>
          <Login/>
      </AuthProvider>

  )
 
}

export default Provider2