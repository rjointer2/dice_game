import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RollDice from './rollDice';

class App extends Component {
  render() {
    return (
      <RollDice />
    )
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector('.dice_container'));

