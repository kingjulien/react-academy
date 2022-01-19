import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import TeamsList from '../components/TeamsList';
import TeamsEdit from '../components/TeamsEdit';
import TeamsProvider, { TeamsContext } from '../store/providers/TeamsProvider';

const Teams: React.FC = () => {
  const { loading } = useContext(TeamsContext);

  return (
    <TeamsProvider>
      <Link to="/">HOME</Link>

      <TeamsList loading={loading} />
      <TeamsEdit />

      <a href="/teams/3">Cez A</a>
      <Outlet />
    </TeamsProvider>
  );
};

export default Teams;
