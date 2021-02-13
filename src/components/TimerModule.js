import React from 'react';
import { connect } from 'react-redux';
import { timerTick } from '../redux/actions'

 {/* User Story #8: I can see an element with corresponding id="time-left".
    NOTE: Paused or running, the value in this field should always be displayed 
    in mm:ss format (i.e. 25:00). */}

    {/* User Story #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms). */}

class TimerModule extends React.Component {
  constructor(props) {
    super(props);
  }

componentDidMount(){
}
  
  componentDidUpdate(){
    //if countdownRunning is true, initialize an interval that fires off
    // the timerTick action once every second
    if (this.props.countdownRunning) {
      this.interval = setInterval(() => {
        console.log(`just about to timerTick`)
        this.props.timerTick();
      }, 1000);
    }
    else {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    return (
    <div><h1>
      Timer module thinks countdownRunning is: {`${this.props.countdownRunning}`}
      </h1>
    </div>)
    ;
  }
}
const mapDispatchToProps = (dispatch) => {
  return ({
    timerTick: () => dispatch(timerTick())
  })
}

const mapStateToProps = (state) => {
  return {
    countdownRunning: state.countdownRunning
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerModule)