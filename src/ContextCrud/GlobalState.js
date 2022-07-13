import React, { createContext, useReducer } from "react";
import appReducer from "./AppReducer";

const initialState = {
  teams: [
    {
      id: 1,
      Name: "Jasmine",
      mail: "jas@gmail.com",
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addTeams(team) {
    dispatch({
      type: "ADD_TEAMS",
      payload: team,
    });
  }
  function editTeams (team) {
    dispatch({
      type: "Edit_Teams",
      payload: team,
    });
  };
  function removeTeams(id){
      dispatch(
          {
              type:"Remove_Teams",
              payload:id,
          }
      );

  }
  return (
    <GlobalContext.Provider
      value={{
        teams: state.teams,
        addTeams,
        editTeams,
        removeTeams,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
