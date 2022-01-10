import React from 'react';
import styles from './Heater.module.css';

interface Props {
  power: number;
  id?: number;
  color?: string;
}

interface State {
  turned: boolean;
}

class Light extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log('Constructing...');

    this.handleSwitch = this.handleSwitch.bind(this);
  }

  componentDidMount() {
    console.log('Mounted');
  }

  componentWillUnmount() {
    console.log('Unmounting...');
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  state: State = {
    turned: false,
  };

  handleSwitch() {}

  render() {
    console.log('RENDER');
    const bulb = this.state.turned ? '💡' : '-';

    return (
      <div>
        <button onClick={this.handleSwitch}>SWITCH</button>
        {bulb}, power: {this.props.power}
      </div>
    );
  }
}

// const Light: React.FC<Props> = ({ id, color, power }) => {
//   return <div className={styles.light}>💡, power: {power}</div>;
// };

export default Light;
