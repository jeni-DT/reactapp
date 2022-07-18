import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GlobalContext } from "./GlobalState";
import "./Crud.css";

const TeamList = () => {
  const nav = useNavigate();
  const { teams, removeTeams } = useContext(GlobalContext);
  const GoBack = (e) => {
    e.preventDefault();
    nav("/Addteam");
  };

  const header = ["ID", "Name", "Email", "Delete", "Update"];

  return (
    <div className="tablebg">
      <div className="tablebg">
        <table class="table table-dark">
          <thead>
            <tr class="table-danger">
              {header.map((Names) => {
                return (
                  <React.Fragment key={Names.id}>
                    <th>{Names}</th>
                  </React.Fragment>
                );
              })}
            </tr>
          </thead>
          <tbody className="table-dark">
            {teams.length > 0 ? (
              <React.Fragment>
                {teams.map((team) => (
                  <tr>
                    <td>{team.id}</td>
                    <td>{team.Name}</td>
                    <td>{team.mail}</td>
                    
                    <td>
                      <button onClick={() => removeTeams(team.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="30"
                          fill="currentColor"
                          class="bi bi-person-x-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </button>
                    </td>
                    <td>
                      <Link to={`/UpdateTeam/${team.id}`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ) : (
              <p>nodata</p>
            )}
          </tbody>
        </table>
      
                      <button type="button" class="btn btn-primary btn-lg" onClick={GoBack}>Add Team  Members</button>
      </div>
      
    </div>
  );
};

export default TeamList;
