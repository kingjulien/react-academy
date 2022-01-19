interface ITeam {
  id: string;
  name: string;
}

export type IState = {
  teams: ITeam[];
  loading: boolean;
};

export type IAction = { type: string; payload?: any };

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const SET_TEAMS = 'SET_TEAMS';

const teamsReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, loading: false };
    case SET_TEAMS:
      // action.payload
      return { ...state, teams: action.payload };
    case 'EDIT_TEAM':
      // action.payload, f.e id, name
      console.log(action.payload);

      const teamsToSet = [...state.teams];

      const theTeam = teamsToSet.find((el) => el.id === action.payload.id);
      if (theTeam) {
        theTeam.name = action.payload.value;
        // setTeams(teamsToSet);
      }

      return { ...state, teams: teamsToSet };
    case 'DELETE_TEAM':
      // find team with ID and delete id from array of teams
      return { ...state };
    default:
      return { ...state };
  }
};

export default teamsReducer;
