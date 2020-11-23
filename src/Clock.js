import React, {Component}  from 'react';

class Clock extends Component {

  constructor(props){
    super(props);
    this.state = {
      date : new Date()
    };
  }
  render(){
    let secondInaHour = 3600;
    const time = this.state.date.getTime() + this.props.timezone*secondInaHour* 1000;
    const date = new Date(time);

    return <h2>In {this.props.country} it'is {date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}</h2>
  }
  tick = () => {
    this.setState({
      date : new Date()
    })
};
  componentDidMount(){
    this.interval = setInterval(this.tick, 1000)
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
}


export default Clock;
