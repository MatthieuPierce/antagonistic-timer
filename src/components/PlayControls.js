import React from 'react';
import {connect} from 'react-redux';
import { timerReset, timerStart, timerStop } from '../redux/actions';
import './PlayControls.css'

function PlayControls (props) {

  const startStop = () => {
    (props.countdownRunning)
    ? props.timerStop()
    : props.timerStart()
  } 
  return (
    <div id="playPad">
      {/* User Story #9: I can see a clickable element with a corresponding
      id="start_stop". */}
      
      {/* User Story #18: When I first click the element with id="start_stop", the
      timer should begin running from the value currently displayed in 
      id="session-length", even if the value has been incremented or decremented 
      from the original value of 25. */}

      {/* User Story #20: If the timer is running and I click the element
      with id="start_stop", the countdown should pause. */}

      {/* User Story #21: If the timer is paused and I click the element
      with id="start_stop", the countdown should resume running from the 
      point at which it was paused. */}      
      <div id="start_stop"
        onClick={startStop}
        className={`btn`}
      > 
        <h3>
          { (!props.countdownRunning)
            ? `START`
            : `STOP`
          }
        </h3>
        </div>


      {/* User Story #10: I can see a clickable element with a corresponding 
      id="reset".

      User Story #11: When I click the element with the id of reset, any running 
      timer should be stopped, the value within id="break-length" should return 
      to 5, the value within id="session-length" should return to 25, and the 
      element with id="time-left" should reset to it's default state.
      */}
      <div id="reset"
        onClick={props.timerReset}
        className={`btn`}
      >
        <h3>RESET</h3>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    sessionDurationMins: state.sessionDurationMins,
    countdownRunning: state.countdownRunning,
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