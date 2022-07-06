import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const initialvalue = {
  Loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Success":
      return {
        Loading: false,
        post: action.payload,
        error: "",
      };
    case "Failure":
      return {
        Loading: false,
        post: {},
        error: ".....ERROR!.....",
      };
   

    default:
      return state;
  }
};

function Fetch() {
    const nav=useNavigate();
    const backCreate=()=>{
       
        nav('/Form');
    }
  const [state, dispatch] = useReducer(reducer, initialvalue);
  const getdata = () => {
    axios
      .get("http://localhost:8000/List")
      .then((request) => {
        dispatch({
          type: "Success",
          error: "",
          payload: request.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "Failure",
          error: "",
          post: {},
        });
      });
  };
  useEffect(() => {
    getdata();
  }, []);

  const onDelete = (e, All) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/List/${All}`)
      .then(() => {
        getdata();
    })
   
  };
  const onUpdate = (id) => {
    
    nav(`/update/${id}`);
  };
  
  const header = [
    "id",
    "Regno",
    "Name",
    "Class",
    "mobile",
    "Mark",
    "Action1",
    "Action2",
  ];

  return (
    <div>
      <div>
        <table className="table">
          <thead className="table-danger">
            <tr>
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
            {state.post.length > 0 &&
              state.post.map((All) => {
                return (
                  <tr>
                    <td>{All.id}</td>
                    <td>{All.regno}</td>
                    <td>{All.name}</td>
                    <td>{All.Class}</td>
                    <td>{All.num}</td>
                    <td>{All.total}</td>

                    <td>
                      <Button variant="primary" onClick={()=>onUpdate(All.id)}>Update</Button>
                    </td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={(e) => onDelete(e, All.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {state.error ? state.error : null}
      </div>
      <Button type="submit" onClick={backCreate}>Create</Button>
    </div>
  );
}

export default Fetch;
