import React, { useContext, useState ,useEffect} from "react";

import { useNavigate, useParams ,Link} from "react-router-dom";
import { GlobalContext } from "./GlobalState";

 const UpdateTeam= () => {
    const navigate = useNavigate();
  const { editTeams, teams } = useContext(GlobalContext);
   const [newuser,setNewuser] = useState({
    id:null,
    Name:'',
    mail:''
   
  });
  let {id}=useParams();
  console.log(id)
  useEffect(() => {
    const newusers = teams.find((newid)=> newid.id ===parseInt(id))
    setNewuser(newusers);
   
  }, [id,teams]);
  
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

   editTeams(newuser);
   navigate('/read')
  };
  const handleChange=(datas,value)=>{
    setNewuser({...newuser,[datas]:value})
  }

  return (
    <React.Fragment >
      <div className="Addbg">
        <div>
          <h1>Team Members</h1>
          <form onSubmit={handleSubmit}>
            <div className="w-full mb-5">
              <label>Name</label>
              <input
                onChange={(e) => handleChange("Name",e.target.value)}
                type="text"
                placeholder="Enter name"
               value={newuser.Name}
               required
              />
            </div>

            <div>
              <label>Email</label>
              <input
                value={newuser.mail}
                onChange={(e) => handleChange("mail",e.target.value)}
                type="email"
                placeholder="Enter designation"
              />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" >Update</button>
            </div>
            <div className="text-center mt-4 text-gray-500">
          <Link to="/read">Cancel</Link>
        </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default UpdateTeam
