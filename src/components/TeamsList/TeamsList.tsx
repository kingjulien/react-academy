import withLoading from '../WithLoadingHOC';
import { Link } from 'react-router-dom';

interface ITeam {
  id: string;
  name: string;
}

interface IProps {
  teams: ITeam[];
}

const TeamsList: React.FC<IProps> = ({ teams }) => {
  const buttonPlusInput = [];
  buttonPlusInput.push(<button key="button1" />);
  buttonPlusInput.push(
    <input type="text" key="input1" placeholder="my input" />
  );

  return (
    <dl>
      {teams.map((team) => (
        <Link to={team.id} key={team.id}>
          <dd>{team.name}</dd>
        </Link>
      ))}

      {buttonPlusInput}
    </dl>
  );
};

export default withLoading(TeamsList);

// as a result - it will return TeamsList component with additional logic for loading status
