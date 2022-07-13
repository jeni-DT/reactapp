import "./App.css";

import { Routes, Route } from "react-router-dom";

import First from "./class";
import Practice from "./example1.js";
import Favorite from "./example2.js";
import Create from "./change.js";
import Firstone from "./destroy.js";

import Student from "./track.js";
import Effect from "./effect.js";
import Effect1 from "./effect1.js";
import Fun from "./effect2.js";

////local Storage
import Login from "./boot/Login";
import Register from "./boot/Single_state";
import Home from "./boot/Home";

//Two Way binding

import Trial from "./Twoway/Trial";
import { Parent } from "./Component/Parent";

import NewFun from "./Twoway/NewFun";
import Dynamic from "./Dynamic";
import Reduce from "./Reduce/Exreduce";
import Main, { Context } from "./Context/Main";
import Datafetch1 from "./Fetching/Datafetch1";
import DataFetch from "./Reduce/Demo";

import Add from "./CURD/Home";
import Form1 from "./Crud/Form1";
import Fetch from "./Crud/Fetch";
import Layout from "./Layout";
import Update from "./Crud/Update";
import Hochome from "./HOC/HocHome";
import Provider2 from "./ContextwithReduce/provider2";
import TeamList from "./ContextCrud/TeamList";
import { AddTeam } from "./ContextCrud/AddTeam";
import UpdateTeam  from "./ContextCrud/Update";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/first" element={<First />} />
        <Route path="/example1" element={<Practice />} />
        <Route path="/example2" element={<Favorite />} />
        <Route path="/change" element={<Create />} />
        <Route path="/destroy" element={<Firstone />} />
        <Route path="/track" element={<Student />} />

        {/* <Route path="/register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="Home" element={<Home />} />
        <Route path="/Form" element={<Form1 />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="par" element={<Parent />} />
        <Route path="trial" element={<Trial />} />
        <Route path="media" element={<Dynamic />} /> */}
        {/* 28.06  */}
        {/* <Route path="reduce" element={<Reduce />} /> */}
        {/* 30.06 */}
        {/* <Route path="main" element={<Main />} />
        <Route path="dfetch" element={<Datafetch1 />} />
        <Route path="fe" element={<DataFetch />} />
        <Route path="add" element={<Add />} /> */}
        {/* HOC */}
        {/* <Route path="hoc" element={<Hochome />}></Route>
        <Route path="provider" element={<Provider2 />} /> */}

        <Route path="/read" element={<TeamList />} />
        

        <Route path="/Addteam" element={<AddTeam />} />
        <Route path="/update/:id" element={<UpdateTeam/>}/>
      </Routes>
    </>
  );
}

export default App;
