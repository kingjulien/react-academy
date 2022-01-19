import { useContext } from 'react';
import { TeamsContext } from '../../store/providers/TeamsProvider';

const TeamsEdit: React.FC = () => {
  const { teams, dispatch } = useContext(TeamsContext);

  return (
    <dl>
      {teams.map((team) => (
        <dd key={team.id}>
          <input
            type="text"
            value={team.name}
            onChange={(e) =>
              dispatch({
                type: 'EDIT_TEAM',
                payload: { id: team.id, value: e.target.value },
              })
            }
          />
        </dd>
      ))}
    </dl>
  );
};

export default TeamsEdit;
