import React,{createContext} from 'react'
import Parent from './Parent'
import './Context.css'

 export const Context= createContext()
 const Main = () => {
  
  return (
    <Context.Provider value={'Hi this is Jeni'}>
    <h1>Main</h1>
    <div className='border'>
      <Parent/>
    </div>
    </Context.Provider>
  )
}
export default Main
