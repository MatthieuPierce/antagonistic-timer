import { INCREMENT_BREAK, DECREMENT_BREAK, 
  INCREMENT_SESSION, DECREMENT_SESSION, RESET, START, STOP, TICK, BREAK_TO_SESSION } 
  from './constants';

// sessionToggle determines whether the countdown type being tracked 
// is the session or the break. sessionToggle: true means the session is active
// (but not necessarily counting down).

  /* User Story #16: I should not be able to set a session or break length 
  to <= 0. */

  /* User Story #17: I should not be able to set a session or break length
    to > 60. */

  /* User Story #23: When a session countdown reaches zero (NOTE: timer MUST 
  reach 00:00), a new break countdown should begin, counting down from the 
  value currently displayed in the id="break-length" element. */

  /* User Story #25: When a break countdown reaches zero (NOTE: timer MUST 
    reach 00:00), a new session countdown should begin, counting down from 
    the value currently displayed in the id="session-length" element. */


const initialState = {
  breakDurationMins: 5,
  countdownRunning: false,
  // remainingBreakTime: 300,
  // remainingSessionTime: 1500,
  remainingCountdown: 5,
  sessionDurationMins: 1,
  sessionToggle: true
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TICK:
      if (state.sessionToggle) {
        return ({
          ...state,
          remainingCountdown: state.remainingCountdown - 1
        });
      } else {
        return ({
          ...state,
          remainingCountdown: state.remainingCountdown - 1
        })
      }
    case INCREMENT_BREAK:
      if (state.breakDurationMins >= 60) {
        return state;
      } else {
        return ({
          ...state,
          breakDurationMins: state.breakDurationMins + 1
          });
      }
    case DECREMENT_BREAK:
      if (state.breakDurationMins <= 0) {
        return state;
      } else {
        return ({
          ...state,
          breakDurationMins: state.breakDurationMins - 1
          });
      }
    case INCREMENT_SESSION:
      if (state.sessionDurationMins >= 60) {
        return state;
      } else {
        return ({
          ...state,
          sessionDurationMins: state.sessionDurationMins + 1
          });
      }
    case DECREMENT_SESSION:
      if (state.sessionDurationMins <= 0) {
        return state;
      } else {
        return ({
          ...state,
          sessionDurationMins: state.sessionDurationMins - 1
          });
      }
    case RESET:
      return (
        {...initialState}
      );
    case START:
      return ({
        ...state,
        countdownRunning: true,
      });
    case STOP:
      return ({
        ...state,
        countdownRunning: false,
      });
    case BREAK_TO_SESSION:
        // if state session toggle is true (currently in "session"),
        // flip to false (now in "break") and load breakMins into countdown
        //else state session toggle is false (currently in break), so
        // flip to true (now in "session") and load sessionMins into countdown
      return ({
        ...state,
        sessionToggle: !state.sessionToggle,
        remainingCountdown: (state.sessionToggle)
                            ? state.breakDurationMins * 60
                            : state.sessionDurationMins * 60
        });
    default:
      return state;
  }
}

export default rootReducer;