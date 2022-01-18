import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import TeamsList from '../components/TeamsList';

interface ITeam {
  id: string;
  name: string;
}

const Teams: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const [teams, setTeams] = useState<ITeam[]>([]);
  useEffect(() => {
    // 200 - https://run.mocky.io/v3/a2bbee7b-be64-4778-931e-e7e0434e3437
    // 404 - https://run.mocky.io/v3/820ec96d-cc24-4af4-af00-2692a9ee704a
    fetch('https://run.mocky.io/v3/a2bbee7b-be64-4778-931e-e7e0434e3437')
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setTeams(data);
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
    <>
      <Link to="/">HOME</Link>
      <TeamsList loading={loading} teams={teams} />

      <a href="/teams/3">Cez A</a>
      <Outlet />
    </>
  );
};

export default Teams;
