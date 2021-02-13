import React from 'react';
import { connect } from 'react-redux';

 {/* User Story #8: I can see an element with corresponding id="time-left".
    NOTE: Paused or running, the value in this field should always be displayed 
    in mm:ss format (i.e. 25:00). */}

const CountdownDisplay = (props) => {
  return (
    <div>
      <h3>Time left (mm:ss):</h3>
      <div id="time-left">{props.timeLeft}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    sessionToggle: state.sessionToggle,
    timeLeft: (state.sessionToggle)
              ? state.remainingSessionTime
              : state.remainingBreakTime
  }
}

export default connect(mapStateToProps)(CountdownDisplay)