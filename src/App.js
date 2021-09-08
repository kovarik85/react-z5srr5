import React from 'react';
import './style.css';
import Gomb from './Gomb';
import Fal from './Fal';

class App extends React.Component {
  state = { egAVillany: false };

  render() {
    const turnIt = () => {
      this.setState(
        prevState => (this.state.egAVillany = !prevState.egAVillany)
      );
    };

    return (
      <Fal  vanFeny={this.state.egAVillany}>
        <Gomb
          text={this.state.egAVillany ? 'OFF' : 'ON'}
          switchIt={turnIt}
          egAVillany={this.state.egAVillany}
        />
      </Fal>
    );
  }
}
export default App;
