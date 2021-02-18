import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import './CountdownDisplay.css'

 {/* User Story #8: I can see an element with corresponding id="time-left".
    NOTE: Paused or running, the value in this field should always be displayed 
    in mm:ss format (i.e. 25:00). */}

  {/* User Story #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms). */}

const CountdownDisplay = (props) => {
  
  const padEl = useRef(null);

  useEffect( () => {
    (!props.sessionToggle)
    ? padEl.current.className = 'flip'
    : padEl.current.className = null
  }, [props.sessionToggle]);

  return (
    <div id="countdown-pad" ref={padEl}>
      <h3>Time left (mm:ss):</h3>
      <h2 id="time-left">{

        new Date(props.timeLeft * 1000).toISOString().substr(14, 5)
        
        }</h2>

    {/*User Story #7: I can see an element with a corresponding id="timer-label",
    that contains a string indicating a session is initialized (e.g. "Session").*/}

    {/* User Story #22: When a session countdown reaches zero (NOTE: timer MUST 
    reach 00:00), and a new countdown begins, the element with the id of 
    timer-label should display a string indicating a break has begun. */}



    {/* User Story #24: When a break countdown reaches zero (NOTE: timer MUST 
    reach 00:00), and a new countdown begins, the element with the id of 
    timer-label should display a string indicating a session has begun. */}



    <div id="timer-label">
      {(props.sessionToggle)
        ? `Work It Session`
        : `Break It`
      } 
    </div>
    
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    sessionToggle: state.sessionToggle,
    timeLeft: state.remainingCountdown
  }
}

export default connect(mapStateToProps)(CountdownDisplay)