import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import styled from 'styled-components';
import HeatersWrapper from '../components/HeatersWrapper';

interface IButtonProps {
  primary: boolean;
}

const Button = styled.button`
  background-color: silver;
`;

const TomatoButton = styled(Button)`
  color: white;
  border-color: tomato;
  background: ${(props: IButtonProps) =>
    props.primary ? 'magenta' : 'orange'};
`;

const Home: React.FC = () => {
  const [primary, setPrimary] = useState(true);

  const buttonClick = () => {
    setPrimary(!primary);
  };

  return (
    <div className="App">
      <HeatersWrapper type="small" power={40}>
        <div>asdasd</div>
      </HeatersWrapper>

      <Button>I am styled Button</Button>
      <TomatoButton primary={primary} onClick={buttonClick}>
        Tomato Button
      </TomatoButton>

      <Link to="teams">Teams</Link>

      <Outlet />
    </div>
  );
};

export default Home;
