import React, { useContext } from "react";
import { ContextState } from "../Global/Context";

export default function TablePerson({ person }) {
  const [state, dispatch] = useContext(ContextState);

  const deletePerson = (id) => {
    dispatch({
      type: "DELETE_PERSON",
      data: { id }
    });
  };

  return (
    <table>
      <tr>
        <th>ID</th>
        <th> Nombre </th>
        <th> Edad </th>
        <th> </th>
        <th> </th>
      </tr>
      {state.length > 0 ? (
        state.map((person) => {
          return (
            <tr>
              <td> {person.id} </td>
              <td> {person.nombre} </td>
              <td> {person.edad} </td>
              <td>
                {" "}
                <button> Edit </button>{" "}
              </td>
              <td>
                <button onClick={() => deletePerson(person.id)}>
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
  );
}
