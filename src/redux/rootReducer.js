import { INCREMENT_BREAK, DECREMENT_BREAK, 
  INCREMENT_SESSION, DECREMENT_SESSION, RESET, START, STOP, TICK, SESSION_TO_BREAK, BREAK_TO_SESSION } 
  from './constants';

//sessionToggle determines whether the countdown type being tracked 
// is the session or the break. sessionToggle: true means the session is active
// (but not necessarily counting down).

  /* User Story #16: I should not be able to set a session or break length 
  to <= 0. */

  /* User Story #17: I should not be able to set a session or break length
  to > 60. */


const initialState = {
  breakDurationMins: 5,
  countdownRunning: false,
  // remainingBreakTime: 300,
  // remainingSessionTime: 1500,
  remainingCountdown: 1500,
  sessionDurationMins: 25,
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
    case SESSION_TO_BREAK:
      return ({
        ...state,
        sessionToggle: false,
        remainingCountdown: state.breakDurationMins * 60
      });
    case BREAK_TO_SESSION:
      return ({
        ...state,
        sessionToggle: true,
        remainingCountdown: state.sessionDurationMins * 60

      })
    default:
      return state;
  }
}

export default rootReducer;