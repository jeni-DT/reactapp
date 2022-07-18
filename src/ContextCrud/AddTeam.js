import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GlobalContext } from "./GlobalState";
import "./Crud.css";

export const AddTeam = () => {
  const { addTeams, teams } = useContext(GlobalContext);
  const [Name, setName] = useState("");
  const [mail, setMail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTeam = {
      id: teams.length + 1,
      Name,
      mail,
    };
    addTeams(newTeam);
    navigate("/read");
  };

  return (
    <div>
      <body className="addTeam">
        <div className="Addbg">
          <h1>Team Members</h1>
          <form onSubmit={handleSubmit}>
            <div className="w-full mb-5">
              <label>
                <b>Name</b>
              </label>
              <input
                value={Name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter name"
                required
              />
            </div>

            <div>
              <label>
                <b>Email</b>
              </label>
              <input
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                type="email"
                placeholder="Enter designation"
              />
            </div>
            <br></br>
            <div className="flex items-center justify-between">
              <button type="submit" class="btn btn-primary">
                submit
              </button>
            </div>
            <div className="text-center mt-4 text-gray-500">
              <Link to="/read">Cancel</Link>
            </div>
          </form>
        </div>
      </body>
    </div>
  );
};
