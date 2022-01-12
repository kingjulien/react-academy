import React, { useEffect, useState } from 'react';

import './App.css';

import styles from './App.module.css';

import styled from 'styled-components';
import Heater from './components/Heater';
import HeatersWrapper from './components/HeatersWrapper';

// add fetch load start and fetch load end indicator - f.e loading icon

interface IData {
  temperature: number;
}

const initialState: IData = {
  temperature: 24,
};

interface IButtonProps {
  primary: boolean;
}

const App: React.FC = () => {
  const Button = styled.button`
    background: ${(props: IButtonProps) =>
      props.primary ? 'magenta' : 'orange'};
  `;

  const TomatoButton = styled(Button)`
    color: white;
    border-color: tomato;
  `;

  const [data, setData] = useState<IData>(initialState);
  const [primary, setPrimary] = useState(true);

  const [inputValue, setValue] = useState('22');

  const inputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const buttonClick = () => {
    setPrimary(!primary);
  };

  useEffect(() => {
    console.log('mounting');

    // returned function will be called on component unmount
    return () => {
      alert('just cleaning up..');
    };
  }, []); // The empty array causes this effect to only run on mount

  const heaterElement = primary && <Heater power={40} />;

  return (
    <div className="App">
      <div className={styles.house}>
        {primary && <HeatersWrapper type="big" power={40} />}

        {heaterElement}

        <HeatersWrapper type="small" power={20} />

        <input type="text" value={inputValue} onChange={inputValueChange} />

        <Button primary={primary} onClick={buttonClick}>
          I am styled Button
        </Button>
        <TomatoButton primary>Tomato Button</TomatoButton>
      </div>
    </div>
  );
};

export default App;
