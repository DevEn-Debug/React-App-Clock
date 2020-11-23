import React, {Component}  from 'react';



class Clock extends Component {

  constructor(props){
    super(props);
    //this.toggleWatch = this.toggleWatch.bind(this)
    this.state = {
      date : new Date(),
      stopped : false
    };
  }
  render(){
    let secondInaHour = 3600;
    const time = this.state.date.getTime() + this.props.timezone*secondInaHour* 1000;
    const date = new Date(time);

    return <li>In {this.props.country} it'is <span className='clock'>{date.toLocaleDateString() + ' ' + date.toLocaleTimeString()} </span><button onClick={this.toggleWatch}>{this.state.stopped ? 'START' : 'STOP'}</button></li>
    
  }

  toggleWatch = (click) => {

    this.setState((state,props) => {
      state.stopped ? this.startWatch() : clearInterval(this.interval);
      return {stopped: ! state.stopped};
    })

  };

  tick = () => {
    this.setState({
      date : new Date()
    })
  };

  startWatch(){
    this.interval = setInterval(this.tick, 1000)
  };

  componentDidMount(){
    this.startWatch ()
  };
  componentWillUnmount(){
    clearInterval(this.interval)
  };
}


export default Clock;
