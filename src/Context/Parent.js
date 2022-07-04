import React from 'react'
import Child from './Child'

function Parent() {
    
  return (
      <>
      <h2>Parent</h2>
    <div className='border'>
        <Child/>
    </div>
    </>
  )
}

export default Parent