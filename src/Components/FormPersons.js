import React, { useState, useContext, useEffect } from "react";
// import styled from "styled-Components";
import { ContextState } from "../Global/Context";

export default function FormPerson() {
  const [person, dispatch] = useContext(ContextState);

  const [state, setState] = useState({
    id: null,
    nombre: String,
    edad: Number
  });

  const addPerson = () => {
    const { nombre, edad } = state;
    if (nombre === "") {
      alert("as");
      return;
    }
    dispatch({
      type: "ADD_PERSON",
      data: { id: person.length + 1, nombre, edad }
    });
    setState({
      nombre: String,
      edad: Number
    });
  };

  const deletePerson = (id) => {
    dispatch({
      type: "DELETE_PERSON",
      data: { id }
    });
  };
  const editPerson = () => {
    const { nombre, edad } = state;
    dispatch({
      type: "EDIT_PERSON",
      data: { id: state.id, nombre, edad }
    });
    setState({
      nombre: String,
      edad: Number
    });
  };
  const startEdit = (id) => {
    setState({ ...person.filter((person) => person.id === id)[0], id });
  };

  function handleChange({ target: { name, value } }) {
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <>
      <FormPerson>
        <div>
          <input
            placeholder="name"
            name="nombre"
            value={state.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="age"
            name="edad"
            value={state.edad}
            onChange={handleChange}
          />
        </div>
        <button onClick={state.id ? editPerson : addPerson}>
          {" "}
          {state.id ? "Save" : "Add"}{" "}
        </button>
      </FormPerson>
      <table>
        <tr>
          <th>ID</th>
          <th> Nombre </th>
          <th> Edad </th>
          <th> </th>
          <th> </th>
        </tr>
        {person.length > 0 ? (
          person.map((onePerson) => {
            return (
              <tr>
                <td> {onePerson.id} </td>
                <td> {onePerson.nombre} </td>
                <td> {onePerson.edad} </td>
                <td>
                  {" "}
                  <button onClick={() => startEdit(onePerson.id)}>
                    {" "}
                    Edit{" "}
                  </button>{" "}
                </td>
                <td>
                  <button onClick={() => deletePerson(onePerson.id)}>
                    {" "}
                    Delete{" "}
                  </button>{" "}
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
        )}
      </table>
    </>
  );
}

// const FormOfPersons = styled.div`
//   display: grid;
//   grid-row-gap: 1vh;
//   width: 30vw;
//   div {
//     display: grid;
//   }
// `;
