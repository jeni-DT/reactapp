import React, { useContext } from 'react'
import {Context} from './Main';




function Child2() {
 const val = useContext(Context)
   
  return (
      <div className='border'>
      <h4> Child2......{val}</h4>
    
    </div>
  )
}

export default Child2