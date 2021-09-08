import React from 'react';
import './style.css';
import Gomb from './Gomb';

class App extends React.Component {
  state = { egAVillany: false };

  render() {
    const turnIt = () => {
      this.setState(
        prevState => (this.state.egAVillany = !prevState.egAVillany)
      );
    };

    return (
      <div>
        <Gomb text={this.state.egAVillany ? "OFF" : "ON"} 
        switchIt={turnIt} egAVillany={this.state.egAVillany} />
      </div>
    );
  }
}
export default App;
