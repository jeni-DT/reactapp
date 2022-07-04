import React from 'react'
import './Style.css'

export const Child = (props,changetitle) => {
  return (
    <div className='child'>
        <h4>{props.data}</h4>
        <h3>Child</h3>
        <button onClick={()=>props.changetitle('hello')}>Click</button>

    </div>
  )
}
