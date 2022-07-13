export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TEAMS":
      console.log(action.payload);
      return{
          ...state,teams:[...state.teams,action.payload]
      }
      case "Remove_Teams":
          return{
              ...state,teams:state.teams.filter((teams)=>teams.id !==action.payload)
          }
          case "Edit_Teams":
            const updatedTeam = action.payload;
      
            const updatedTeams = state.teams.map((team) => {
              if (team.id === updatedTeam.id) {
                return updatedTeam;
              }
              return team;
            });
      
            return {
              ...state,
              teams: updatedTeams,
            };
      
    default:
      break;
  }
}
