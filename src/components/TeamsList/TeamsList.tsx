import { useContext } from 'react';
import { TeamsContext } from '../../store/providers/TeamsProvider';
import withLoading from '../WithLoadingHOC';
import { Link } from 'react-router-dom';

const TeamsList: React.FC = () => {
  const { teams } = useContext(TeamsContext);

  return (
    <dl>
      {teams.map((team) => (
        <Link to={team.id} key={team.id}>
          <dd>{team.name}</dd>
        </Link>
      ))}
    </dl>
  );
};

export default withLoading(TeamsList);

// as a result - it will return TeamsList component with additional logic for loading status
