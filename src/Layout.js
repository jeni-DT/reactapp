import React from 'react'
import { Link } from 'react-router-dom'

function Layout() {
  return (
    <div >
        <nav>
            <ul>
            <li>
                    <Link to="first">Classcomponent</Link>
                </li>
                <li>
                    <Link to="example1">State</Link>
                </li>
                <li>
                    <Link to="example2">Didmound</Link>
                </li>
                <li>
                    <Link to="change">DidUpdate</Link>
                </li>
                <li>
                    <Link to="/destroy">Remove</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/Form">crud</Link>
                </li>
                <li>
                    <Link to="media">Media</Link>
                </li>
                
                
                <li>
                    <Link to="new">Twoway</Link>
                </li>
                <li>
                    <Link to="par">ParentComponent</Link>
                </li>
                <li>
                    <Link to="trial">Usekey</Link>
                </li>
                
                <li>
                    <Link to="reduce">ReduceSample</Link>
                </li>
                <li>
                    <Link to="main">Context</Link>
                </li>
                <li>
                    <Link to="dfetch">datafetchStateEffect</Link>
                </li>
                <li>
                    <Link to="fe">fetchReducer</Link>
                </li>
                <li>
                    <Link to="add">crudimg</Link>
                </li>
                <li>
                    <Link to="hoc">HOC</Link>
                </li>
                <li>
                    <Link to="provider">context with reducer</Link>
                </li>
                {/* <li>
                    <Link to="global">Context Api</Link>
                </li>
                <li>
                    <Link to="conmain"> Context</Link>
                </li> */}
                <li>
                    <Link to="/Addteam">Add</Link>
                </li>
                {/* <li>
                    <Link to ="/read"></Link>
                </li> */}

                

            </ul>
        </nav>
    </div>
  )
}

export default Layout