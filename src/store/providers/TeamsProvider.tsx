import React, { createContext, useEffect, useReducer, Dispatch } from 'react';

import teamsReducer, {
  FETCH_START,
  FETCH_SUCCESS,
  SET_TEAMS,
  IState,
} from '../reducers/teams';

interface ITeam {
  id: string;
  name: string;
}

interface IActions {
  type: string;
  payload?: any;
}

interface IContext {
  teams: ITeam[];
  loading: boolean;
  dispatch: Dispatch<IActions>;
}

const initialState: IState = {
  teams: [],
  loading: false,
};

export const TeamsContext = createContext({} as IContext);

const Teams: React.FC = ({ children }) => {
  const [teamsReducerState, dispatchTeamReducer] = useReducer(
    teamsReducer,
    initialState
  );

  const changeTeamName = (id: string, value: string) => {
    dispatchTeamReducer({ type: 'EDIT_TEAM', payload: { id, value } });

    /*
      const teamsToSet = [...teams];
      const theTeam = teamsToSet.find((el) => el.id === id);
      if (theTeam) {
        theTeam.name = value;
        // setTeams(teamsToSet);
      }
      */
  };

  useEffect(() => {
    dispatchTeamReducer({ type: FETCH_START });
    // 200 - https://run.mocky.io/v3/a2bbee7b-be64-4778-931e-e7e0434e3437
    // 404 - https://run.mocky.io/v3/820ec96d-cc24-4af4-af00-2692a9ee704a
    fetch('https://run.mocky.io/v3/a2bbee7b-be64-4778-931e-e7e0434e3437')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then((data) => {
        dispatchTeamReducer({ type: FETCH_SUCCESS });
        dispatchTeamReducer({ type: SET_TEAMS, payload: data });
      })
      .catch((error) => {
        alert('Error: ' + error);
      });
  }, []); // The empty array causes this effect to only run on mount

  /*
    const teams = [
      { id: '1', name: 'Arsenal' },
      { id: '2', name: 'Tottenham' },
      { id: '3', name: 'Chelsea' },
    ];
    */

  return (
    <TeamsContext.Provider
      value={{
        teams: teamsReducerState.teams,
        loading: teamsReducerState.loading,
        dispatch: dispatchTeamReducer,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};

export default Teams;
