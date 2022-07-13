import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate,Link } from 'react-router-dom'
import { GlobalContext } from './GlobalState'
import "./Crud.css"

const TeamList = () => {
  const myStyle={
    backgroundImage: 
"url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  const nav=useNavigate()
    const {teams,removeTeams}=useContext(GlobalContext)
    const GoBack=(e)=>{
      e.preventDefault();
      nav('/Addteam')


    }
  
    const header=[
     "ID",
     "Name",
     "Email",
     "Add",
     "Delete",
     "Update"
    ]

    return (
        <div className='tablebg'>
          <div className='tablebg'>
          <table class="table table-dark">
            <thead >
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
              <td> <button  onClick={GoBack}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg></button></td>
                <td><button onClick={()=>removeTeams(team.id)}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-person-x-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
</svg></button></td>
<td>
<Link to={`/update/${team.id}`}><button>Edit</button></Link>
</td>
              </tr>
             
             
                          
            
           
          ))}
        </React.Fragment>
      ):(
        <p>nodata</p>
      )}
      </tbody>
      </table>
      </div>
      </div>
  );
    
  
};

export default TeamList