import React from 'react';
import { connect } from 'react-redux';
import './CountdownDisplay.css'

 {/* User Story #8: I can see an element with corresponding id="time-left".
    NOTE: Paused or running, the value in this field should always be displayed 
    in mm:ss format (i.e. 25:00). */}

  {/* User Story #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms). */}

const CountdownDisplay = (props) => {
  return (
    <div id="countdown-pad">
      <h3>Time left (mm:ss):</h3>
      <h2 id="time-left">{props.timeLeft}</h2>

    {/*User Story #7: I can see an element with a corresponding id="timer-label",
    that contains a string indicating a session is initialized (e.g. "Session").*/}
    <div id="timer-label">Timer Label Session</div>
    
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