import React from 'react';
import {connect} from 'react-redux';
import { timerReset, timerStart, timerStop } from '../redux/actions';


class PlayControls extends React.Component {
  constructor(props){
    super(props);
    this.startStop = this.startStop.bind(this);
  }

  startStop = () => {
    (this.props.countdownRunning)
    ? this.props.timerStop()
    : this.props.timerStart()
  } 

  render() {
    return (
      <div id="playPad">
        {/* User Story #9: I can see a clickable element with a corresponding
        id="start_stop". */}
        
        {/* User Story #18: When I first click the element with id="start_stop", the
        timer should begin running from the value currently displayed in 
        id="session-length", even if the value has been incremented or decremented 
        from the original value of 25. */}
        <h1>
        PlayControls component thinks countdownRunning is: {`${this.props.countdownRunning}`}
      </h1>        
        <div id="start_stop"
          onClick={this.startStop}
        >
          Clickable Start/Stop Element
          </div>


        {/* User Story #10: I can see a clickable element with a corresponding 
        id="reset".

        User Story #11: When I click the element with the id of reset, any running 
        timer should be stopped, the value within id="break-length" should return 
        to 5, the value within id="session-length" should return to 25, and the 
        element with id="time-left" should reset to it's default state.
        */}
        <div id="reset"
          onClick={this.props.timerReset}
        >
          Clickable Reset Element
        </div>

      </div>

    )

  }
}

const mapStateToProps = (state) => {
  return {
    sessionDurationMins: state.sessionDurationMins,
    countdownRunning: state.countdownRunning

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    timerReset: () => dispatch(timerReset()),
    timerStart: () => dispatch(timerStart()),
    timerStop: () => dispatch(timerStop())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayControls);