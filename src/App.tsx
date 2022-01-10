import React, { useEffect, useState } from 'react';

import './App.css';
import Heater from './components/Heater';
import styles from './App.module.css';

// add fetch load start and fetch load end indicator - f.e loading icon

interface IState {
  temperature: number;
}

const initialState: IState = {
  temperature: 24,
};

const App: React.FC = () => {
  const [data, setData] = useState<IState>(initialState);

  const [inputValue, setValue] = useState('22');

  const inputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log('mounting');

    // returned function will be called on component unmount
    return () => {
      alert('just cleaning up..');
    };
  }, []); // The empty array causes this effect to only run on mount

  return (
    <>
      <Heater power={40} />
      <input type="text" value={inputValue} onChange={inputValueChange} />
    </>
  );
};

export default App;
