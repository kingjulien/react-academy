import React from 'react';
import { useParams } from 'react-router-dom';

const Teams: React.FC = () => {
  const { teamId } = useParams();

  return (
    <div>
      <p>Team ID: {teamId}</p>
    </div>
  );
};

export default Teams;
