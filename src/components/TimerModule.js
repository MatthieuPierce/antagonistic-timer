import React, { useState, useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { breakToSession, timerTick } from '../redux/actions'

 {/* User Story #8: I can see an element with corresponding id="time-left".
    NOTE: Paused or running, the value in this field should always be displayed 
    in mm:ss format (i.e. 25:00). */}

  {/* User Story #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms). */}

function TimerModule (props) {
    // if countdownRunning is true, initialize an interval that fires off
    // the timerTick action once every second
  const [interv, setInterv] = useState(null);

  useEffect( () => {
    if (props.countdownRunning) {
      setInterv(setInterval(() => {
        props.timerTick();
      }, 1000));
    }
    else {
      clearInterval(interv);
    }

    return function cleanup() {
      clearInterval(interv);
    };
  }, [props.countdownRunning]);

 
  useLayoutEffect( () => {
    if (props.remainingCountdown <= -1) {
      props.breakToSession();
    }
  }
  );

  {/* User Story #26: When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding id="beep". */}

  {/* User Story #27: The audio element with id="beep" must be 1 second or longer. */}

  {/* User Story #28: The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked. */}

    return null;
}

const mapDispatchToProps = (dispatch) => {
  return ({
    breakToSession: () => dispatch(breakToSession()),
    timerTick: () => dispatch(timerTick()),
  })
}

const mapStateToProps = (state) => {
  return {
    countdownRunning: state.countdownRunning,
    remainingCountdown: state.remainingCountdown,
    sessionToggle: state.sessionToggle

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerModule)