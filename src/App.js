import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

class App extends Component {
  state = {
    choices: ['1', '2', '3', '4'],
    activeNum: '1',
  };
  changeChoice(choice) {
    this.setState({ activeNum: choice });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            activeNum={this.state.activeNum}
            changeChoice={this.changeChoice}
          />
          <Circles activeNum={this.state.activeNum} />
        </main>
      </div>
    );
  }
}

export default App;
