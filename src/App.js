
import './App.css';

import {Routes, Route, BrowserRouter } from "react-router-dom";


// import First from './class';
// import Practice from './example1.js';
// import Favorite from './example2.js';
// import Create from './change.js';
// import Firstone from './destroy.js';


// import Student from './track.js';
// import Effect from './effect.js';
// import Effect1 from './effect1.js';
// import Fun from './effect2.js';

               ////local Storage
import Login from './boot/Login';
import Register from './boot/Single_state';
import Home from './boot/Home';


//Two Way binding

import Trial from './Twoway/Trial';
import { Parent } from './Component/Parent';

import NewFun from './Twoway/NewFun';
import Dynamic from './Dynamic';
import Reduce from './Reduce/Exreduce'
import Main, { Context } from './Context/Main';
import Datafetch1 from './Fetching/Datafetch1';
import DataFetch from './Reduce/Demo';


import Add from './CURD/Home';
import Form1 from './Crud/Form1';
import Fetch from './Crud/Fetch';


function App() {
  return(
   <>
   {/* <First/>
   <Practice/>
   <Favorite />
   <Create />
   <Firstone/>
   
   <Student/>
   <Effect/>
   <Effect1/>
   <Fun/> */}
   {/* <Login/>
   <Register/> */}
  
   {/* <Routes>
          <Route path="/" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="Home" element={<Home />} />
          </Routes> */}
          
          <Routes>
            <Route path='/Form' element={<Form1/>}/>
            <Route path='/fetch' element={<Fetch/>}/>
          </Routes>
          
          

           {/* <NewFun/> */}

           {/* <Parent/>
           <Trial/>
           <Dynamic/> */}
          
            {/* 28.06  */}
           {/* <Reduce/> */}

           {/* 30.06 */}
           {/* <Main/> */}
           {/* fetching */}
           {/* <Datafetch1/> */}
           {/* <DataFetch/> */}


           {/* <Index/> */}
           {/* <Context/> */}
           {/* <Add/> */}
           
           <Form1/>
           
           
   </>
  );
}

export default App;
