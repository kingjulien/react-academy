import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './App.module.css';

// uloha - pridat fetch load start a fetch load end indicator - napriklad pre loading icon

interface IState {
  temperature: number;
}

const initialState: IState = {
  temperature: 24,
};

const App: React.FC = () => {
  const [data, setData] = useState<IState>(initialState);

  useEffect(() => {
    console.log('mounting');

    // returned function will be called on component unmount
    return () => {
      alert('just cleaning up..');
    };
  }, []); // The empty array causes this effect to only run on mount

  return (
    <>
      <div className="App">
        <img src={logo} alt="React logo" width="100" height="100" />
      </div>
      {/* create and use data component here - try lifecycle methods using conditional statement */}
      <div className={styles.data}>Temperature: {data.temperature}</div>
    </>
  );
};

export default App;
