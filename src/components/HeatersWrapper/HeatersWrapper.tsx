import React from 'react';

import styles from './HeatersWrapper.module.css';
import Heater from '../Heater';

enum IColorType {
  'big',
  'small',
}

interface IProps {
  type: keyof typeof IColorType;
  power: number;
}

const HeatersWrapper: React.FC<IProps> = ({ type, ...props }) => {
  return (
    <div className={styles[type]}>
      <Heater {...props} />
    </div>
  );
};

export default HeatersWrapper;
