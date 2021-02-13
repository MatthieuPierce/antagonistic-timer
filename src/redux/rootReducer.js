import { INCREMENT_BREAK, DECREMENT_BREAK, 
  INCREMENT_SESSION, DECREMENT_SESSION, RESET, START, STOP } from './constants';

//sessionToggle determines whether the countdown type being tracked 
// is the session or the break. sessionToggle: true means the session is active
// (but not necessarily counting down).

const initialState = {
  breakDurationMins: 5,
  sessionDurationMins: 25,
  remainingBreakTime: 5,
  remainingSessionTime: 25,
  countdownRunning: false,
  sessionToggle: true
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
      return state;
    case START:
      return state;
    case STOP:
      return state;
    default:
      return state;
  }
}

export default rootReducer;