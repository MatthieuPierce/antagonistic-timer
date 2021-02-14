import { INCREMENT_BREAK, DECREMENT_BREAK, 
  INCREMENT_SESSION, DECREMENT_SESSION, RESET, START, STOP, TICK, BREAK_TO_SESSION } from './constants';

export const breakUp = () => {
  return {
    type: INCREMENT_BREAK
  }
}

export const breakDown = () => {
  return {
    type: DECREMENT_BREAK
  }
}

export const sessionUp = () => {
  return {
    type: INCREMENT_SESSION
  }
}

export const sessionDown = () => {
  return {
    type: DECREMENT_SESSION
  }
}

export const timerReset = () => {
  return {
    type: RESET
  }
}

export const timerStart = () => {
  return {
    type: START
  }
}

export const timerStop = () => {
  return {
    type: STOP
  }
}

export const timerTick = () => {
  return {
    type: TICK
  }
}

export const breakToSession = () => {
  return {
    type: BREAK_TO_SESSION
  }
}