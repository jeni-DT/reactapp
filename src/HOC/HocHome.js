import React from 'react'
import Clickcounter from './Clickcounter'
import HoverCount from './HoverCount'
import HocCounter from './HocCounter'
const UpdatedHocCounter=HocCounter(Clickcounter)
const UpdatedHocHover =HocCounter(HoverCount)
const Hochome=() =>{
  return (
    <div>
      <h1>Higher Order Component</h1>
      <UpdatedHocCounter name='Jeni'/>
        <hr></hr>
       <UpdatedHocHover name='Jeni'/>
    </div>
  )
}

export default Hochome