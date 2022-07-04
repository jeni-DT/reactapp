
import { useState } from "react";

function Student(){
    
    const[student,setStudent]=useState({
        name:"Felsi",
        degree:"M.Sc cs",
        dno:"20pcs803",
        clg:"St. Joseph's college",
        place:"Trichy"
    });
    const updateStudent =()=>{
        setStudent(previousState =>{
            return{...previousState,name:" Arockiya Felci"}
        });
    }
   
    
    return(
        
        <div id="update">
            <h2>Update the particular object </h2>
            <p><b>Hi..... this is {student.name}</b> </p>
            <p>My dno {student.dno}  {student.degree} from {student.clg} {student.place}</p>
            <button
        type="button"
        onClick={updateStudent}
      >Update</button>
        </div>
    )

}
 export default Student