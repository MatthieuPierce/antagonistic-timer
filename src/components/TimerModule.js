import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { breakToSession, timerTick } from '../redux/actions'

 {/* User Story #8: I can see an element with corresponding id="time-left".
    NOTE: Paused or running, the value in this field should always be displayed 
    in mm:ss format (i.e. 25:00). */}

    {/* User Story #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms). */}

function TimerModule (props) {
    //if countdownRunning is true, initialize an interval that fires off
    // the timerTick action once every second
  
  const [interv, setInterv] = useState(null);

  useEffect( () => {
    if (props.countdownRunning) {
      setInterv(setInterval(() => {
        console.log(`just about to timerTick`)
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

  useEffect( () => {
    if (props.remainingCountdown === 0) {
      props.breakToSession();
    }
  }
  );

    return (
    <div><h3>
      Timer module thinks countdownRunning is: {`${props.countdownRunning}`}
      </h3>
    </div>)
    ;
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