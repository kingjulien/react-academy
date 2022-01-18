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

  handleSwitch() {
    // @task - ako "1-liner menit true/false"
    this.setState({ turned: !this.state.turned });
  }

  render() {
    const bulb = this.state.turned ? '💡' : '-';

    const divStyle = this.state.turned ? styles.lightOn : styles.lightOff;

    return (
      <div className={divStyle}>
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
