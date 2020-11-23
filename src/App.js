import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';


class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Clock in React</h1>
        <Clock timezone='0' country='Italy'/>
        <Clock timezone='2' country='Russia'/>
        <Clock timezone='-6' country='Cuba'/>
      </header>
    </div>
  );
}
}

export default App;
