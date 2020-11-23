import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

const clocks = [
  {
    timezone : 0,
    country : 'Italy'
  },
  {
    timezone : 2,
    country : 'Russia'
  },
  {
    timezone :  -6,
    country : 'Cuba'
  },
]

class App extends Component {

  getClocs(){
    return clocks.map((clock) => {return <Clock key = {clock.country} timezone={clock.timezone} country={clock.country}/>});
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Clock in React</h1>
        <ul>{this.getClocs()}</ul>
      </header>
    </div>
  );
}
}

export default App;
